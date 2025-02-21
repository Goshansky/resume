import {profileData} from "../data.ts";

const Experience = () => {
    return (
        <div className="resume_item resume_social">
            <div className="title">
                <p className="bold">Опыт работы</p>
            </div>
            <p className="regular">{profileData.experience[0].company}</p>
            <p className="regular">{profileData.experience[0].position}</p>
            <p className="regular">{profileData.experience[0].duration}</p>
        </div>
    );
};

export default Experience;
