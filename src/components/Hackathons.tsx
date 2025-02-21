import {profileData} from "../data.ts";

const Hackathons = () => {
    return (
        <div className="resume_item resume_work">
            <div className="title">
                <p className="bold">Хакатоны</p>
            </div>
            <ul>
                {profileData.hackathons.map((hackathon, index) => (
                    <li key={index}>
                        <div className="date">{hackathon.year}</div>
                        <div className="info">
                            <p className="semi-bold">
                                <b>{hackathon.title}</b>
                            </p>
                            <p>
                                <a href={hackathon.link} target="_blank" rel="noopener noreferrer"
                                   className="custom-link">
                                    {hackathon.link}
                                </a>
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Hackathons;
