import Profile from './components/Profile';
import Info from './components/Info';
import HardSkills from './components/HardSkills.tsx';
import Experience from './components/Experience';
import Education from './components/Education';
import About from './components/About';
import Hackathons from './components/Hackathons';
import PetProjects from './components/PetProjects';
import AdditionalEducation from './components/AdditionalEducation';
import './index.css';
import SoftSkills from "./components/SoftSkills.tsx";

const App = () => {
    return (
        <div className="resume">
            <div className="resume_left">
                <Profile />
                <div className="resume_content">
                    <Info />
                    <HardSkills />
                    <SoftSkills />
                    <Experience />
                    <Education />
                </div>
            </div>
            <div className="resume_right">
                <About />
                <Hackathons />
                <PetProjects />
                <AdditionalEducation />
            </div>
        </div>
    );
};

export default App;
