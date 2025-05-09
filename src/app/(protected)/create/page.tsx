"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";

type FormInput = {
  repoUrl: string;
  projectName: string;
  githubToken?: string;
};

const CreatePage = () => {
  const { register, handleSubmit, reset } = useForm<FormInput>();

  const onSubmit = (data: FormInput) => {
    window.alert(JSON.stringify(data, null, 2));
    console.log(data);
  };

  return (
    <div className="flex h-full items-center justify-center gap-12">
      <img src="" className="h-56 w-auto" />
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
