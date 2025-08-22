import Image from "next/image";

export default function ProjectCard({keyProp, projectName, image, description, links }) {
    return (
        <div className="col" data-key={keyProp.toString()}>
            {/* // style="max-width: 540px;" */}
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <Image src={image} className="img-fluid rounded-start" alt=" app logo" width={300} height={200} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{projectName}</h5>
                            <p className="card-text">{description}</p>
                            <a href={links}>Visit</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 