import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data/projectData";

export default function ProjectDetails() {

    const { slug } = useParams();

    const project = projects.find(
        (p) => p.slug === slug
    );

    console.log(project);

    useEffect(() => {

        if (!project || project.live === "#") return;

        window.location.href = project.live;

    }, [project]);

    if (!project) {
        return <h2>Project not found.</h2>;
    }

    return (

        <section className="project-page">

            <h2>Loading project...</h2>

        </section>

    );

}