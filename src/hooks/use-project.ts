import { api } from "@/trpc/react";
import { useLocalStorage } from "usehooks-ts";

const useProject = () => {
  const { data: projects } = api.project.getProjects.useQuery();
  const [projectId, setProjectId] = useLocalStorage("emily-projectId", ""); //selected project id
  const project = projects?.find((project) => project.id === projectId);

  // const { data: project } = api.project.getProjectById.useQuery(
  //   projects?.[0]?.id ?? "",
  // );
  return { projects, project, projectId, setProjectId };
};

export default useProject;
