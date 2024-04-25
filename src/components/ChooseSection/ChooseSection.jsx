import React from "react";
import { Card } from "react-bootstrap";

function ChooseSection() {
  return (
    <div>
      <div className="container">
        <h2 className="text-center mb-5"><b>Why People like us?</b></h2>
        <div className="row g-4">
          <div className="col-lg-4">
            <Card className="d-flex align-items-center border-0 h-100">
              <div className="mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="#dc3545"
                  class="bi bi-trophy-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935" />
                </svg>
              </div>
              <Card.Body>
                <Card.Title className="text-center text-capitalize mb-3">
                  Academic Excellence
                </Card.Title>
                <Card.Text className="text-center">
                  Indoctrinating technical and professional education with
                  scientific and creative teaching-learning process and skilling
                  technology to undertake challenges with confidence,
                  self-motivation, research and problem-solving skills.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className="d-flex align-items-center border-0 h-100">
              <div className="mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="#dc3545"
                  class="bi bi-emoji-smile-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8" />
                </svg>
              </div>
              <Card.Body>
                <Card.Title className="text-center text-capitalize mb-3">
                  Parents & Alumni Meet
                </Card.Title>
                <Card.Text className="text-center">
                  Always facilitates learning which is inspirational as well as
                  motivating for getting good education and builds relationship
                  among professional groups in long-term.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className="d-flex align-items-center border-0 h-100">
              <div className="mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="#dc3545"
                  class="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                </svg>
              </div>
              <Card.Body>
                <Card.Title className="text-center text-capitalize mb-3">
                  Jashn-e-Theem
                </Card.Title>
                <Card.Text className="text-center">
                  Motivates and invigorates the students to participate in all
                  events- technical, sports and cultural. Paves way for school
                  students to participate in the Junior Scientist Competition.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className="d-flex align-items-center border-0 h-100">
              <div className="mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="#dc3545"
                  class="bi bi-buildings-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM2 11h1v1H2zm2 0h1v1H4zm-1 2v1H2v-1zm1 0h1v1H4zm9-10v1h-1V3zM8 5h1v1H8zm1 2v1H8V7zM8 9h1v1H8zm2 0h1v1h-1zm-1 2v1H8v-1zm1 0h1v1h-1zm3-2v1h-1V9zm-1 2h1v1h-1zm-2-4h1v1h-1zm3 0v1h-1V7zm-2-2v1h-1V5zm1 0h1v1h-1z" />
                </svg>
              </div>
              <Card.Body>
                <Card.Title className="text-center text-capitalize mb-3">
                  World Class Infrastructure
                </Card.Title>
                <Card.Text className="text-center">
                  Surrounded by 10 acre lush green arena. Equipped with ICT
                  support classrooms, modern machinery labs and workshops, R&D
                  labs for skill development, internet connection, RO water
                  system and hygienic canteen facility.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className="d-flex align-items-center border-0 h-100">
              <div className="mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="#dc3545"
                  class="bi bi-person-raised-hand"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 6.207v9.043a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H6.236a1 1 0 0 1-.447-.106l-.33-.165A.83.83 0 0 1 5 2.488V.75a.75.75 0 0 0-1.5 0v2.083c0 .715.404 1.37 1.044 1.689L5.5 5c.32.32.5.754.5 1.207" />
                  <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                </svg>
              </div>
              <Card.Body>
                <Card.Title className="text-center text-capitalize mb-3">
                  T & P Assistance
                </Card.Title>
                <Card.Text className="text-center">
                  Helps students to develop right attitudes, soft-skills,
                  motivates for strong technical and analytical capabilities at
                  corporate level, provides industrial visits, technical skills
                  training, career guidance, seminars and campus interviews.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className="d-flex align-items-center border-0 h-100">
              <div className="mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="#dc3545"
                  class="bi bi-award-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z" />
                  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
                </svg>
              </div>
              <Card.Body>
                <Card.Title className="text-center text-capitalize mb-3">
                  The State Of Art Laboratories
                </Card.Title>
                <Card.Text className="text-center">
                  Well-furnished Modern Equipment Laboratories with safety
                  measures; 'Theem Makers Vector' - A place for Innovative
                  Projects.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className="d-flex align-items-center border-0 h-100">
              <div className="mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="#dc3545"
                  class="bi bi-buildings-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM2 11h1v1H2zm2 0h1v1H4zm-1 2v1H2v-1zm1 0h1v1H4zm9-10v1h-1V3zM8 5h1v1H8zm1 2v1H8V7zM8 9h1v1H8zm2 0h1v1h-1zm-1 2v1H8v-1zm1 0h1v1h-1zm3-2v1h-1V9zm-1 2h1v1h-1zm-2-4h1v1h-1zm3 0v1h-1V7zm-2-2v1h-1V5zm1 0h1v1h-1z" />
                </svg>
              </div>
              <Card.Body>
                <Card.Title className="text-center text-capitalize mb-3">
                  Cont. Industrial Interaction
                </Card.Title>
                <Card.Text className="text-center">
                  Situated in the vicinity of Boisar(MIDC), students get
                  exposure to industries through Internship, Industry-Visits,
                  Expert Lectures and Sponsored Projects.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className="d-flex align-items-center border-0 h-100">
              <div className="mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="#dc3545"
                  class="bi bi-award-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z" />
                  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
                </svg>
              </div>
              <Card.Body>
                <Card.Title className="text-center text-capitalize mb-3">
                  Highly Qualified Faculty
                </Card.Title>
                <Card.Text className="text-center">
                  Availability of experienced faculty to guide students in
                  academics and to resolve the problems of the students on
                  fingertips.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className="d-flex align-items-center border-0 h-100">
              <div className="mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="#dc3545"
                  class="bi bi-emoji-smile-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8" />
                </svg>
              </div>
              <Card.Body>
                <Card.Title className="text-center text-capitalize mb-3">
                  Affordable Fees
                </Card.Title>
                <Card.Text className="text-center">
                  Institute maintains affordable fees for students, in fact the
                  lowest among the most of the western line engineering
                  colleges.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card className="d-flex align-items-center border-0 h-100">
              <div className="mt-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  fill="#dc3545"
                  class="bi bi-book-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                </svg>
              </div>
              <Card.Body>
                <Card.Title className="text-center text-capitalize mb-3">
                  Resources Library
                </Card.Title>
                <Card.Text className="text-center">
                  Library with the facility of Centre of Excellence Digital
                  Library, Audio-video Lab, Paper Presentation Centre and
                  availability of over 20,000 books, whole series of offline and
                  online National and International Journals
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseSection;
