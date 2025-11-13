function Projects() {
    const projects = [
        {
        title: "Hospital Management System",
        tech: "Java Swing, MySQL",
        description: "A full-featured system for managing hospital data.",
        image: "/assets1/HMS.png"
        },
        {
        title: "Event Ticketing System",
        tech: "Java Swing, MySQL",
        description: "A full-featured system for managing event data.",
        image: "/assets1/ETS.png"
        },
        {
        title: "DeskSpan by Extendify",
        tech: "3D Printing, Product Design",
        description: "Portable desk extender for workspace comfort.",
        image: "/assets1/DS.png"
        }
    ];

    return (
        <div className="card">
            <h2>Projects</h2>
            <div>
                {projects.map((p, i) => (
                <div key={i} className="p-6 border rounded-lg shadow-md">
                    <h3>{p.title}</h3>
                    <p>{p.tech}</p>
                    <p>{p.description}</p>
                    <a href={p.image}>View Project →</a>
                </div>
                ))}
            </div>
        </div>
        
    );
}

export default Projects;
