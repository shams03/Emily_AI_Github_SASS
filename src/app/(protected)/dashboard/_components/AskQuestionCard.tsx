"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import useProject from "@/hooks/use-project";
import React, { useState } from "react";
import { readStreamableValue } from "ai/rsc";
import MDEditor from "@uiw/react-md-editor";
import { ScrollArea } from "@/components/ui/scroll-area";
import { api } from "@/trpc/react";
import { toast } from "sonner";
import useRefetch from "@/hooks/use-refetch";
import { askQuestion } from "../actions";
import CodeReferences from "./CodeReferences";
import Image from "next/image";
import { Loader2 } from "lucide-react";

const AskQuestionCrad = () => {
  const { project } = useProject();
  const [question, setQuestion] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [filesReferences, setFilesReferences] = React.useState<
    { fileName: string; sourceCode: string; summary: string }[]
  >([]);
  const [answer, setAnswer] = React.useState("");
  const saveAnswer = api.project.saveAnswer.useMutation();
  const refetch = useRefetch();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setAnswer("");
    setFilesReferences([]);
    e.preventDefault();
    if (!project?.id) return;

    setLoading(true);
    setOpen(true);

    try {
      const { output, filesReferences } = await askQuestion(
        question,
        project.id,
      );
      setFilesReferences(filesReferences);

      let streamStarted = false;
      for await (const delta of readStreamableValue(output)) {
        if (!streamStarted) {
          streamStarted = true;
          setLoading(false);
        }
        if (delta) {
          setAnswer((ans) => ans + delta);
        }
      }
    } catch (error) {
      setLoading(false);
      toast.error("Failed. Too many requests are being made . Consider Upgrading ...");
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="flex !h-full flex-col overflow-y-scroll sm:max-w-[80vw]">
          <DialogHeader>
            <div className="flex items-center gap-2">
              <DialogTitle>
                <Image src="/logo2.png" alt="logo" width={32} height={32} />
                {/* Logo */}
              </DialogTitle>
              <Button
                variant={"outline"}
                disabled={saveAnswer.isPending}
                onClick={() => {
                  saveAnswer.mutate(
                    {
                      projectId: project!.id,
                      question,
                      answer,
                      filesReferences,
                    },
                    {
                      onSuccess: () => {
                        toast.success("Answer saved!");
                        refetch();
                      },
                      onError: () => {
                        toast.error("Failed to save answer!");
                      },
                    },
                  );
                }}
              >
                Save Answer
              </Button>
            </div>
          </DialogHeader>
          <div className="flex-1 overflow-y-auto">
            <div data-color-mode="light">
              <ScrollArea className="m-auto !h-full max-h-[40vh] max-w-[70vw] overflow-auto">
                <MDEditor.Markdown source={answer} />
              </ScrollArea>
            </div>
            {loading && (<>
              <div className="flex mt-2 items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin" />
              </div>
              <p className="text-red-500 mt-2 font-mono text-center top-0 h-full">Click on the file names to open them in Emily</p>
              </>
            )}
            <div className="h-4"></div>
            <CodeReferences filesReferences={filesReferences} />
          </div>
          <div className="bg-background sticky bottom-0 pt-4">
            <Button
              type="button"
              onClick={() => {
                setOpen(false);
              }}
              className="w-full"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <Card className="relative col-span-3">
        <CardHeader>
          <CardTitle>Ask a question</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit}>
            <Textarea
              placeholder="Which file should I edit to change the home page ?"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            ></Textarea>
            <div className="h-4"></div>
            <Button type="submit" disabled={loading}>
              Ask Emily
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default AskQuestionCrad;
