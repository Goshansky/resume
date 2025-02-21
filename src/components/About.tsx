import {profileData} from "../data.ts";

const About = () => {
    return (
        <div className="resume_item resume_about">
            <div className="title">
                <p className="bold">Обо мне</p>
            </div>
            <p className="text-justify">
                {profileData.about}
            </p>
        </div>
    );
};

export default About;
