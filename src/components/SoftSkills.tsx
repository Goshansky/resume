import {profileData} from "../data.ts";

const SoftSkills = () => {
    return (
        <div className="resume_item resume_skills">
            <div className="title">
                <p className="bold">Soft Skills</p>
            </div>
            <p className="regular">
                {profileData.softSkills.join(" ")}
            </p>
        </div>
    );
};

export default SoftSkills;