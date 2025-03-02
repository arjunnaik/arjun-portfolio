import React from "react";
import "./MainPage.css";
import pic from "../../assets/arjun_pic.png";
import Image from "next/image";

const MainPage: React.FC = () => {
  return (
    <div className="main-page">
      <div className="image-section">
        <Image src={pic} alt="Your Name" className="profile-image" />
      </div>
      <div className="description-section">
        <p>
          👨‍💻 I am a Software Engineer passionate about building seamless web and
          desktop applications, with experience in hardware integration and
          payment solutions.
        </p>
        <p>
          🚀 Beyond coding, I’m an avid explorer—whether it`s hitting the
          badminton court, cycling through new trails, swimming, or hitting the
          gym. I also love biking and discovering new places.
        </p>
        <p>🌟 Always eager to learn, create, and push boundaries.</p>
        <p>
          🌟 Feel free to explore my portfolio to learn more about my projects
          and achievements. 📈
        </p>
      </div>
    </div>
  );
};

export default MainPage;
