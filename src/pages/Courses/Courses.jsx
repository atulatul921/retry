import React, { useState } from "react";
import "./Courses.css";

function Courses() {
  const [data, setData] = useState([
    {
      sem: 3,
      subjects: [
        {
          subject: "Engineering Mathematics-III",
          modules: [
            "Laplace Transform",
            "Inverse Laplace Transform",
            "Fourier Series",
            "Complex Variables",
            "Statistical Techniques",
            "Probability",
          ],
        },
        {
          subject: "Discrete Structures and Graph Theory",
          modules: [
            "Logic",
            "Relations and Functions",
            "Posets and Lattice",
            "Counting",
            "Algebraic Structures",
            "Graph Theory",
          ],
        },
        {
          subject: "Data Structures",
          modules: [
            "Introduction to Data Structures",
            "Stack and Queues.",
            "Linked List ",
            "Implement different operations on trees.",
            "Trees",
            "Graphs",
            "Searching Techniques",
          ],
        },
        {
          subject: "Digital Logic & Computer Organization and Architecture",
          modules: [
            "Computer Fundamentals",
            "Data Representation and Arithmetic algorithms ",
            "Processor Organization and Architecture",
            "Control Unit Design",
            "Memory Organization",
            "Principles of Advanced Processor and Buses",
          ],
        },
        {
          subject: "Computer Graphics",
          modules: [
            "Introduction and Overview of Graphics System",
            "Output Primitives",
            "Two Dimensional Geometric Transformations",
            "Three Dimensional Geometric Transformations, Curves and Fractal Generation",
            "Visible Surface Detection and Animation",
          ],
        },
      ],
    },
    {
      sem: 4,
      subjects: [
        {
          subject: "Applied Mathematics IV",
          modules: [
            "Linear Algebra",
            "Complex Integration ",
            "Z Transform",
            "Probability Distribution and Sampling Theory",
            "Linear Programming Problems",
            " Nonlinear Programming Problems",
          ],
        },
        {
          subject: "Analysis of Algorithms",
          modules: [
            "Introduction",
            "Divide and Conquer Approach",
            "Greedy Method Approach",
            "Dynamic Programming Approach",
            "Backtracking and Branch and bound ",
            "String Matching Algorithms",
          ],
        },
        {
          subject: "Database Management System",
          modules: [
            "Introduction Database Concepts",
            "Entity–Relationship Data Model",
            "Relational Model and relational Algebra",
            "Structured Query Language (SQL) ",
            "Relational-Database Design",
            "Transactions Management and Concurrency and Recovery",
          ],
        },
        {
          subject: "Operating System",
          modules: [
            "Operating system Overview ",
            "Process and Process Scheduling",
            "Process Synchronization and Deadlocks ",
            "Memory Management",
            "File Management",
            "I/O management",
          ],
          
        },
        {
          subject: "Microprocessor",
          modules: [
            "The Intel Microprocessors 8086 Architecture.",
            "Instruction Set and Programming",
            "Memory and Peripherals interfacing",
            "Intel 80386DX Processor",
            "Pentium Processor",
            "Pentium 4",
          ],
        },
     
        
      ],
    },
    {
      sem: 5,
      subjects: [
        {
          subject: "Theoretical Computer Science",
          modules: [
            "Basic Concepts and Finite Automata",
            "Regular Expressions and Languages",
            "Grammars",
            "Pushdown Automata(PDA)",
            "Turing Machine (TM)",
            "Undecidability",
          ],
        },
        {
          subject: "Software Engineering",
          modules: [
            "Introduction To Software Engineering and Process Models",
            "Software Requirements Analysis and Modeling ",
            "Software Estimation Metrics",
            "Software Design",
            "Software Testing",
            "Software Configuration Management, Quality Assurance and Maintenance",
          ],
        },
        {
          subject: "Computer Network",
          modules: [
            "Introduction to Networking",
            "Physical Layer",
            "Data Link Layer",
            "Network layer",
            "Transport Layer",
            "Application Layer",
          ],
        },
        {
          subject: "Data Warehousing and Mining",
          modules: [
            "Data Warehousing Fundamentals",
            "Introduction to Data Mining, Data Exploration and Data Pre-processing",
            "Classification",
            "Clustering",
            "Mining frequent patterns and associations",
            "Web Mining",
          ],
        },
        {
          subject: "Internet Programming",
          modules: [
            "Introduction to Web Technology",
            "Front End Development",
            "Back End Development",
            "Rich Internet Application (RIA)",
            "Web Extension: PHP and XML",
            "React js",
          ],
        },
      ],
    },
    {
      sem: 6,
      subjects: [
        {
          subject: "System Programming and Compiler Construction",
          modules: [
            "Introduction to System Software",
            "Assemblers",
            "Macros and Macro Processor",
            "Loaders and Linkers",
            "Compilers: Analysis Phase ",
            "Compilers: Synthesis phase",
          ],
        },
        {
          subject: "Cryptography & System Security",
          modules: [
            "Introduction - Number Theory and Basic Cryptography",
            "Symmetric and Asymmetric key Cryptography and key Management",
            "Cryptographic Hash Functions",
            "Authentication Protocols & Digital Signature Schemes",
            "Network Security and Applications",
            "System Security",
          ],
        },
        {
          subject: "Mobile Computing",
          modules: [
            "Introduction to Mobile Computing",
            "GSM Mobile services",
            "Mobile Networking",
            "Wireless Local Area Networks",
            "Mobility Management",
            "Long-Term Evolution (LTE) of 3GPP",
          ],
        },
        {
          subject: "Artificial Intelligence",
          modules: [
            "Introduction to Artificial Intelligence",
            "Intelligent Agents",
            "Problem solving",
            "Knowledge and Reasoning",
            "Planning and Learning",
            "AI Applications",
          ],
        },
        {
          subject: "Internet of Things",
          modules: [
            "Introduction to Internet of Things (IoT)",
            "Things in IoT",
            "The Core IoT Functional Stack",
            "Application Protocols for IoT",
            "Domain Specific IoTs",
            "Domain Specific IoTs",
          ],
        },
      ],
    },
    {
      sem: 7,
      subjects: [
        {
          subject: "Machine Learning",
          modules: [
            "Introduction to Machine Learning",
            "Learning with Regression and Trees",
            "Ensemble Learning",
            "Learning with Classification",
            "Learning with Clustering",
            "Dimensionality Reduction",
          ],
        },
        {
          subject: "Big Data Analysis",
          modules: [
            "Introduction to Big Data and Hadoop",
            "Hadoop HDFS and MapReduce",
            "NoSQL",
            "Mining Data Streams",
            "Real-Time Big Data Models",
            "Data Analytics with R",
          ],
        },
        {
          subject: "Natural Language Processing",
          modules: [
            "Introduction to NLP",
            "Word Level Analysis",
            "Syntax analysis",
            "Semantic Analysis",
            "Pragmatic & Discourse Processing",
            "Applications of NLP",
          ],
        },
        {
          subject: "Information Retrieval",
          modules: [
            "Introduction to Information Retrieval",
            "Modeling in Information Retrieval",
            "Query and Operations in Information Retrieval",
            "Indexing and Scoring in Information Systems",
            "Evaluation of Information Retrieval Systems",
            "Applications of Information Retrieval Systems",
          ],
        },
        {
          subject: "Cyber Security and Laws",
          modules: [
            "Introduction to Cybercrime",
            "Cyber offenses & Cybercrime",
            "Tools and Methods Used in Cyberline",
            "The Concept of Cyberspace",
            "Indian IT Act",
            "Information Security Standard compliances",
          ],
        },
      ],
    },
    {
      sem: 8,
      subjects: [
        {
          subject: "Distributed Computing",
          modules: [
            "Introduction to Distributed Systems",
            "Communication",
            "Synchronization",
            "Resource and Process Management",
            "Replication, Consistency and Fault Tolerance",
            "Distributed File Systems",
          ],
        },
        {
          subject: "Deep Learning",
          modules: [
            "Fundamentals of Neural Network",
            "Training, Optimization and Regularization of Deep Neural Network",
            "Autoencoders: Unsupervised Learning",
            "Convolutional Neural Networks (CNN): Supervised Learning",
            "Recurrent Neural Networks (RNN)",
            "Recent Trends and Applications ",
          ],
        },
        {
          subject: "Social Media Analytics",
          modules: [
            "Social Media Analytics: An Overview",
            "Social Network Structure, Measures & Visualization",
            "Social Media Text, Action & Hyperlink Analytics",
            "Social Media Location & Search Engine Analytics",
            "Social Information Filtering",
            "Social Media Analytics Applications and Privacy",
          ],
        },
        {
          subject: "Digital Business Management",
          modules: [
            "Introduction to Digital Business",
            "Overview of E-Commerce E-Commerce",
            "Digital Business Support services",
            "Managing E-Business",
            "E-Business Strategy",
            "Materializing e-business: From Idea to Realization",
          ],
        },
      ],
    },
  ]);
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
      <div className="mt-[2rem]">
        <div className="w-full border flex flex-col items-center justify-center p-6 border-black">
          {data.map((item) => (
            <div className="w-full border flex flex-col items-center justify-center p-6 border-black">
              <h1 className="text-black font-bold text-[1.3rem]">
                Semester {item.sem}
              </h1>
              <div className="w-full flex items-center flex-col justify-center mt-4">
                {item.subjects.map((subject) => (
                  <div className="w-full border flex-col flex items-center justify-around p-6 border-black">
                    <h1 className="text-black font-bold text-[1rem]">
                      {subject.subject}
                    </h1>
                    <div className="h-full flex content-stretch justify-center flex-wrap md:items-start">
                      {subject.modules.map((module) => (
                        <div className="h-full w-full border basis-0 flex  items-center justify-center p-2 border-black">
                          <span className="text-black text-[1rem] w-full">
                            {module}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
