"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { lucario } from "react-syntax-highlighter/dist/esm/styles/prism";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

type Props = {
  filesReferences: {
    fileName: string;
    sourceCode: string;
    summary: string;
  }[];
};

const CodeReferences = ({ filesReferences }: Props) => {
  const [tab, setTab] = React.useState(filesReferences[0]?.fileName);
  if (filesReferences.length === 0) return null;

  return (
    <div className="m-auto max-h-[60vh] max-w-[70vw] overflow-x-scroll overflow-y-scroll">
      <Tabs value={tab} onValueChange={setTab}>
        <ScrollArea className="w-full overflow-auto">
          <div className="flex gap-2 rounded-md bg-gray-200 p-1">
            {filesReferences.map((file) => (
              <button
                onClick={() => setTab(file.fileName)}
                key={file.fileName}
                className={cn(
                  "text-muted-foreground hover:bg-muted-foreground hover:text-primary-foreground max-w-[80vw] rounded-md px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-colors",
                  {
                    "bg-primary text-primary-foreground": tab === file.fileName,
                  },
                )}
              >
                {file.fileName}
              </button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        {filesReferences.map((file) => (
          <TabsContent
            key={file.fileName}
            value={file.fileName}
            className="max-w-7xl rounded-md"
          >
            <div className="!h-full max-h-[70vh] w-full overflow-auto overflow-y-scroll">
              <SyntaxHighlighter
                language="typescript"
                style={lucario}
                className="overflow-auto"
              >
                {file.sourceCode}
              </SyntaxHighlighter>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default CodeReferences;
