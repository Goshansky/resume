import {profileData} from "../data.ts";

const AdditionalEducation = () => {
    return (
        <div className="resume_item resume_education">
            <div className="title">
                <p className="bold">Доп. Образование</p>
            </div>
            <ul>
                {profileData.additionalEducations.map((additionalEducation, index) => (
                    <li key={index}>
                        <div className="date">{additionalEducation.year} <b>{additionalEducation.title}</b></div>
                        <div className="info">
                            <p>{additionalEducation.link}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdditionalEducation;
