import {profileData} from "../data.ts";

const Info = () => {
    return (
        <div className="resume_item resume_info">
            <div className="title">
                <p className="bold">{profileData.name}, {profileData.age} лет</p>
                <p className="regular1">{profileData.title}</p>
            </div>
            <ul>
                {profileData.contacts.map((contact, index) =>
                    <li key={index}>
                        <div className="icon">
                            <i className={contact.icon}></i>
                        </div>
                        <div className="data">{contact.text}</div>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Info;
