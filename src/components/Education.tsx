import {profileData} from "../data.ts";

const Education = () => {
    return (
        <div className="resume_item resume_social">
            <div className="title">
                <p className="bold">Образование</p>
            </div>
            <p className="regular">{profileData.education[0].institution}</p>
            <p className="regular">{profileData.education[0].field}</p>
            <p className="regular">{profileData.education[0].years}</p>
        </div>
    );
};

export default Education;
