import React from "react";
import "./Home.css";
import ChooseSection from "../../components/ChooseSection/ChooseSection";
import Testimonials from "../../components/Testimonials/Testimonials";

function Home() {
  return (
    <div className="home-page">
      <header className="h-100 min-vh-100 d-flex align-items-center text-light">
        <div className="container d-flex flex-column align-items-center">
          <h2>Welcome to</h2>
          <h1 className="text-center fw-semibold">
            Theem College of Engineering Computer Department.
          </h1>
          <p className="text-center">
            The Computer Department at Theem College of Engineering is an integral
            part of the institution, offering a dynamic and comprehensive range
            of academic programs, research initiatives, and practical
            experiences. With a commitment to excellence, innovation, and
            technological advancement, the Computer Department provides students
            with a rigorous and cutting-edge education that prepares them for
            successful careers in the rapidly evolving field of computer science
            and engineering. Through state-of-the-art facilities, dedicated
            faculty, and a supportive learning environment, the department
            ensures that students are equipped with the knowledge and skills
            necessary to meet the demands of the modern computing industry. This
            introduction provides a glimpse into the vibrant and progressive
            nature of the Computer Department, highlighting its contributions to
            the academic and professional development of its students.
          </p>
        </div>
      </header>

      <div className="py-5">
        <ChooseSection />
      </div>

      <div className="py-5">
        <Testimonials />
      </div>
    </div>
  );
}

export default Home;
