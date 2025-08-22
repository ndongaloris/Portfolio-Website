import { Projects } from "../data/project"
import ProjectCard from "./projectCard"


export default function MyProjects() {
    return (
        <section id="project">
            <h3 id="my-project"><strong>PROJECTS I HAVE BUILT</strong></h3>
            <hr />
            <div className="container text-center displayP">
                <div className="row row-cols-1 row-cols-lg-2">
                    {Projects.map((project, index) => (
                        <ProjectCard keyProp={index} key={index} projectName={project.projectName} image={project.image} description={project.description} links={project.link} />
                    ))}
                </div>
            </div>
        </section>
    )
}