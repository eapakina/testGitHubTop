import { Avatar, Button, Card, CardContent, Typography } from "@mui/material";
import { Project } from "../types/types";
import styles from "../scc/ProjectCard.module.css"; 

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className={styles.card}>
      <CardContent className={styles.cardContent}>
        <Typography variant="h5" component="div">
          {project.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description || "Нет описания"}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          display="flex"
          alignItems="center"
        >
          <Avatar
            alt={project.owner.login}
            src={project.owner.avatar_url}
            sx={{ width: 24, height: 24, marginRight: 1 }}
          />
          <strong>Владелец:</strong> {`${project.owner.login}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Количество просмотров:</strong> {project.watchers}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href={project.html_url}
          target="_blank"
        >
          Перейти на GitHub
        </Button>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
