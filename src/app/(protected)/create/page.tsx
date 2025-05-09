"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/trpc/react";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type FormInput = {
  repoUrl: string;
  projectName: string;
  githubToken?: string;
};

const CreatePage = () => {
  const { register, handleSubmit, reset } = useForm<FormInput>();
  const createProject = api.project.createProject.useMutation(); //used to call the backend function

  const onSubmit = (data: FormInput) => {
    // window.alert(JSON.stringify(data, null, 2));
    createProject.mutate({
      name: data.projectName,
      githubUrl: data.repoUrl,
      githubToken: data.githubToken,
    },{
      onSuccess:()=>{
        toast.success("Project created successfully");
      },
      onError:()=>{
        toast.error("Failed to create project");
      }
    });
    console.log(data);
  };

  return (
    <div className="flex h-full items-center justify-center gap-12">
      <img
        src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXd0azB5eGx0c3B6eDl2NGh0Z2c2cmdzcnh5MnVnbDJtZzZtcmQxMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1LYkpkt4fjcoOR7GRs/giphy.gif"
        className="h-62 w-auto"
      />
      <div>
        <div>
          <h1 className="text-2xl font-bold">Link Your Github Repo</h1>
          <p className="text-muted-foreground text-sm">
            Enter the URL of the github repo you want to link to Emily.
          </p>
        </div>
        <div className="h-4"></div>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...register("repoUrl", { required: true })}
              placeholder="https://github.com/username/repo-name"
              type="url"
            />
            <Input
              className="mt-1"
              {...register("projectName", { required: true })}
              placeholder="My Awesome Project"
            />
            <Input
              className="mt-1"
              {...register("githubToken", { required: true })}
              placeholder="github-token"
            />
            <Button className="mt-2" type="submit">
              Link Repo
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
