import './style.css';
function About() {
    return (
        <div className="card about-card">
            <div className="profile-img-container">
                <img
                    src='/assets1/ProfilePic.jpg'
                    alt="Profile"
                    className="profile-img"
                />
            </div>
            <h3>Roginne Geoffrey T. Ticao</h3>
            <p>
                A 3rd Year student currently taking <br />
                BS in Computer Science in Pamantasan ng Cabuyao
            </p>
            <p>🎮 Interested in Game and Web Development 🎮</p>
            <a href="https://github.com/R9jin">Github Link</a>
        </div>
    );
}

export default About;
