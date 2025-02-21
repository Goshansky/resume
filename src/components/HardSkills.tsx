import {profileData} from "../data.ts";

const HardSkills = () => {
    return (
        <div className="resume_item resume_skills">
            <div className="title">
                <p className="bold">Hard Skills</p>
            </div>
            <p className="regular">
                {profileData.skills.join(" ")}
            </p>
        </div>
    );
};

export default HardSkills;
