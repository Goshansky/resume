import {profileData} from "../data.ts";

const PetProjects = () => {
    return (
        <div className="resume_item resume_education">
            <div className="title">
                <p className="bold">Pet-проекты</p>
            </div>
            <ul>
                {profileData.projects.map((project, index) =>
                    <li key={index}>
                        <div className="date">{project.year}</div>
                        <div className="info">
                            <p className="semi-bold">
                                <b>{project.title}</b>
                            </p>
                            <p>{project.link}</p>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default PetProjects;
