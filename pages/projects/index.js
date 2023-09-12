import { useRouter } from "next/router";
import Link from "next/link";

const projects = [
  {
    projectId: "p1",
    name: "Project 1",
  },
  {
    projectId: "p2",
    name: "Project 2",
  },
];

function Projects() {
  const router = useRouter();

  function loadProjectHandler() {
    router.push({
      pathname: `projects/[projectId]`,
      query: { projectId: "p1" },
    });
  }
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.projectId}>
            {/* <Link href={`/projects/${project.projectId}`}>{project.name}</Link> */}
            <Link
              href={{
                pathname: `projects/[projectId]`,
                query: { projectId: project.projectId },
              }}
            >
              {project.name}
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={loadProjectHandler}>Load Project 1</button>
    </div>
  );
}

export default Projects;
