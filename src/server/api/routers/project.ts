import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

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
        data:{
          name:input.name,
          githubUrl:input.githubUrl,
          userToProjects:{
            create:{
              userId:ctx.user.userId!,
            }
          }
        }
      })
      console.log("input", input);
      return true;
    }),
});
