import About from "./Components/About";
import PersonalInfo from "./Components/PersonalInfo";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import "./Profile.css";

function App() {
    return (
        <div className="app">
            <About/>
            <Skills/>
            <PersonalInfo/>
            <Projects/>
        </div>
    );
}

export default App;
