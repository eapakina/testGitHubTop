import { Box, Button, Grid2 } from "@mui/material";
import { useEffect, useState } from "react";
import { Project } from "../types/types";
import { fetchTSProjectsTop } from "../Api/github";
import ProjectCard from "./ProjectCard";
import styles from "../scc/ProjectsGitHub.module.css";

function ProjectsGitHub() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true);
      try {
        const newProjects = await fetchTSProjectsTop(page);
        setProjects((prevProjects) => [...prevProjects, ...newProjects]);
      } catch (error) {
        console.error("Ошибка загрузки", error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
    return () => {};
  }, [page]);

  const loadMoreProjects = () => setPage((prevPage) => prevPage + 1);
  console.log(projects);
  return (
    <Box className={styles.container}>
      <h1 className={styles.title}>Самые популярные TS проекты на GitHUB</h1>
      <Grid2 container spacing={2}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        <Button
          onClick={loadMoreProjects}
          disabled={loading}
          variant="contained"
          color="primary"
          className={styles.loadMoreButton}
        >
          {loading ? "Загрузка..." : "Загрузить еще"}
        </Button>
      </Grid2>
    </Box>
  );
}

export default ProjectsGitHub;
