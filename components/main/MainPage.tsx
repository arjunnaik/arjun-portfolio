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
          👨‍💻 I am a frontend engineer with two years of experience in web development, 
          desktop applications, and hardware integration. I specialize in creating 
          seamless and efficient solutions using various technologies. 🚀
        </p>
        <p>
          💳 I have a strong background in integrating payment devices, automating deployment processes, 
          and improving overall efficiency. I am also experienced in using modern tools and 
          frameworks to deliver high-quality results. 🛠️
        </p>
        <p>
          🌟 Feel free to explore my portfolio to learn more about my projects and achievements. 
          📈
        </p>
      </div>
    </div>
  );
};

export default MainPage;
