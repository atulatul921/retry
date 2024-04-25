import React from "react";
import "./About.css";
import ChooseSection from "../../components/ChooseSection/ChooseSection";
import { Collapse } from "antd";

function About() {
  const items = [
    {
      key: "1",
      label: "About us",
      children: (
        <p>
          Theem College Of Engineering (Theem COE) is promoted by the H.J.Thim
          Trust, which has been founded to educate and empower the youth who
          play a decisive role in shaping the destiny of the nation. The College
          is located at Boisar (East) in serene and tranquil surroundings and
          was established in the year 2009 with an objective to impart quality
          education to students in the field of Technology. Theem COE has
          emerged as the only Premier Engineering College in Boisar with an
          overall intake of 540 students in various fields of engineering.
        </p>
      ),
    },
    {
      key: "2",
      label: "Vision",
      children: (
        <p>
          To become a Centre of Excellence In Technical & Professional
          Education.
        </p>
      ),
    },
    {
      key: "2",
      label: "Mission",
      children: (
        <p>
          1. To commit for high standards in technical and professional
          education.<br></br>
          2. To impart quality professional education through ICT initiatives
          and project based learning.<br></br>
          3. To nurture technocrats and professionals with ethics and human
          values
        </p>
      ),
    },
    {
      key: "3",
      label: "Quality Policy & Quality Objectives",
      children: (
        <p>
          <b>Quality Policy</b>
          <br></br>
          To pursue global standards in all our endeavors namely - teaching,
          skill-empowering, ICT initiatives and project based learning through
          continuous processes with self-evaluation.<br></br>
          <br></br>
          <b>Quality Objectives</b>
          <br></br>To follow the conformity of the regulatory requirements of
          Mumbai University, Govt. of Maharashtra, AICTE, DTE, MSBTE, NAAC and
          NBA.<br></br>
          To continue the improvement of teaching aids with modern tools and
          learning facilities.<br></br>
          To facilitate specialized workshop for project based learning.
          <br></br>
          To enhance employability through school finishing initiative.<br></br>
          To organize Industry Institute Interaction Program, Seminars and STTP
          for knowledge enhancement and skill-empowerment.<br></br>
          To monitor academic quality improvement to ensure the earliest
          corrective action in the event of any non-conformity.<br></br>
          To measure stakeholders’ satisfaction level periodically through
          feedback reports.<br></br>
          To measure success in university examinations and overall students’
          placement through campus interviews.<br></br>
          To engage stakeholders through social, ethical and community service
          activities.<br></br>
          To commit ourselves to these quality objectives to ensure that they
          are known, understood and implemented by all members of the institute.
        </p>
      ),
    },
    {
      key: "4",
      label: "Human Values and Professional Ethics",
      children: (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h8>
            <b>
              Institution Offers Courses on Human Values and Professional Ethics
            </b>
          </h8>
        </div>
      ),
      children: (
        <p>
          <b>Course on Human Values and Professional Ethics:</b>
          <br></br>
          The University of Mumbai Curriculum has many subjects which covers
          partially on human values and professional ethics. The following few
          subjects FEC 206 (All branches) – Communication Skills and EEL 501/ECL
          503/ITL 505/MEL506/CE 507/AEL506/CSL 505 (subjects corresponding to
          Electrical, Electronics and Telecommunication, Information Technology,
          Mechanical, Civil, Automobile and Computer engineering respectively) –
          Business Communication and Ethics help the student community to learn
          various interpersonal skills for conscious attempt of social
          activities and how to improve one‘s personality to communicate with
          others. It inculcates the Human Values that develops tolerance for
          ambiguity, uncertainty in human contact, self-learning to understand
          harmony in self and the entire existence. It also indoctrinates them
          through national festivals such as Independence Day, Republic Day,
          Engineers Day, and Teacher’s Day and counselled through Anti-Ragging
          Cell, Blood Donation Camp and Mentor-Mentee System.<br></br>
          <br></br>
          <b>Professional Ethics </b>is the conduct of quality workmanship to
          build professional reputation, successful and influenced circumstances
          to open doors either in the workplace or in personal ambition. Through
          teaching-learning process, students get training on the following:
          Presentation on Interpersonal Skills, Project Report, Role Play and
          Case Studies on corporate world industries for individual personality
          development and group activities in practical sessions. The Training
          and Placement Cell creates a learning ambience to have wonderful
          practice on Mock - interview, group discussion, aptitude tests, etc.
          for promoting responsibility, principled behaviour, respect the
          discipline of the entire members of the community.
        </p>
      ),
    },
    {
      key: "5",
      label: "EOA",
      children: (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h8>
            <embed
              src="https://theemcoe.org/attachments/NAAC/EOA.pdf"
              width="700"
              height="800"
              type="application/pdf"
            ></embed>
          </h8>
        </div>
      ),
    },
  ];

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div className="container pt-[10rem] pb-[5rem]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-black font-bold text-[3rem]">
          Welcome to Computer Engineering
        </h1>
        <p className="text-xl">
          Computer Engineering is a fascinating program, and one that is now
          indispensible in our lives.The department provides extensive computing
          resources for research and education.This includes more than 125
          high-performance computers in the range of Linux, Windows. There is a
          separate departmental library with books, manuals and project reports.
        </p>
      </div>

      <div className="pt-5 pb-5 mx-auto">
        <Collapse items={items} defaultActiveKey={["1"]} onChange={onChange} />
      </div>

      <div className="bg-dark text-light py-5">
        <ChooseSection />
      </div>
    </div>
  );
}

export default About;
