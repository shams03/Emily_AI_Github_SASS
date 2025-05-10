import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { pullCommits } from "@/lib/github";
import { checkCredits, indexGithubRepo } from "@/lib/github-loader";

export const projectRouter = createTRPCRouter({
  createProject: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        githubUrl: z.string(),
        githubToken: z.string().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      // ctx.user.userId
      const project = await ctx.db.project.create({
        data: {
          name: input.name,
          githubUrl: input.githubUrl,
          userToProjects: {
            create: {
              userId: ctx.user.userId!,
            },
          },
        },
      });
      console.log("input", input);
      await indexGithubRepo(project.id, input.githubUrl, input.githubToken);
      await pullCommits(project.id);
      return project;
    }),

  getProjects: protectedProcedure.query(async ({ ctx }) => {
    const projects = await ctx.db.project.findMany({
      where: {
        userToProjects: {
          some: {
            userId: ctx.user.userId!,
          },
        },
        deletedAt: null,
      },
    });
    return projects;
  }),

  getProjectById: protectedProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      const project = await ctx.db.project.findUnique({
        where: { id: input },
      });
      return project;
    }),

  getCommits: protectedProcedure
    .input(
      z.object({
        projectId: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      pullCommits(input.projectId).then().catch(console.error);
      return await ctx.db.commit.findMany({
        where: { projectId: input.projectId },
      });
    }),
  saveAnswer: protectedProcedure
    .input(
      z.object({
        projectId: z.string(),
        question: z.string(),
        answer: z.string(),
        filesReferences: z.any(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.question.create({
        data: {
          answer: input.answer,
          filesReferences: input.filesReferences,
          projectId: input.projectId,
          question: input.question,
          userId: ctx.user.userId!,
        },
      });
    }),
  getQuestions: protectedProcedure
    .input(
      z.object({
        projectId: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const questions = await ctx.db.question.findMany({
        where: {
          projectId: input.projectId,
        },
        include: {
          user: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
      console.log("questions", questions);
      return questions;
    }),
  uploadMeeting: protectedProcedure
    .input(
      z.object({
        projectId: z.string(),
        meetingUrl: z.string(),
        name: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const meeting = await ctx.db.meeting.create({
        data: {
          meetingUrl: input.meetingUrl,
          projectId: input.projectId,
          name: input.name,
          status: "PROCESSING",
        },
      });
      return meeting;
    }),
  getMeetings: protectedProcedure
    .input(z.object({ projectId: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.db.meeting.findMany({
        where: { projectId: input.projectId },
        include: { issues: true },
      });
    }),
  deleteMeeting: protectedProcedure
    .input(z.object({ meetingId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.meeting.delete({ where: { id: input.meetingId } });
    }),
  getMeetingById: protectedProcedure
    .input(z.object({ meetingId: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.db.meeting.findUnique({
        where: { id: input.meetingId },
        include: { issues: true },
      });
    }),
  archiveProject: protectedProcedure
    .input(z.object({ projectId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return await ctx.db.project.update({
        where: { id: input.projectId },
        data: { deletedAt: new Date() },
      });
    }),
  getTeamMembers: protectedProcedure
    .input(z.object({ projectId: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.db.userToProject.findMany({
        where: { projectId: input.projectId },
        include: { user: true },
      });
    }),
  getMyCredits: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.db.user.findUnique({
      where: { id: ctx.user.userId! },
      select: { credits: true, id: true },
    });
  }),
  checkCredits: protectedProcedure
    .input(
      z.object({ githubUrl: z.string(), githubToken: z.string().optional() }),
    )
    .mutation(async ({ ctx, input }) => {
      const fileCount = await checkCredits(input.githubUrl, input.githubToken);
      const userCredits = await ctx.db.user.findUnique({
        where: { id: ctx.user.userId! },
        select: { credits: true },
      });
      return { fileCount, userCredits: userCredits?.credits || 0 };
    }),
});
