import React from "react";
import JobCard from "./components/JobCard";

const App = () => {
 const jobsData = [
  {
    id: 1,
    availability: "Available",
    price: "$55/hr",
    name: "James Smith",
    role: "UI/UX Designer",
    company: "Epic Coders",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    description: "James is an experienced UI/UX designer with a strong creative portfolio."
  },
  {
    id: 2,
    availability: "Unavailable",
    price: "$70/hr",
    name: "Emma Johnson",
    role: "Frontend Developer",
    company: "Techify",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    description: "Emma specializes in building responsive and modern web interfaces."
  },
  {
    id: 3,
    availability: "Available",
    price: "$60/hr",
    name: "Liam Brown",
    role: "Backend Developer",
    company: "CodeWorks",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    description: "Liam develops scalable server-side applications and APIs."
  },
  {
    id: 4,
    availability: "Available",
    price: "$80/hr",
    name: "Olivia Davis",
    role: "Full Stack Developer",
    company: "InnovateX",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    description: "Olivia builds complete web solutions using modern tech stacks."
  },
  {
    id: 5,
    availability: "Unavailable",
    price: "$65/hr",
    name: "Noah Wilson",
    role: "Product Designer",
    company: "DesignHub",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    description: "Noah focuses on user-centered design and product strategy."
  },
  {
    id: 6,
    availability: "Available",
    price: "$75/hr",
    name: "Ava Martinez",
    role: "Mobile App Developer",
    company: "NextGen Labs",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    description: "Ava develops high-performance mobile applications."
  },
  {
    id: 7,
    availability: "Available",
    price: "$90/hr",
    name: "William Anderson",
    role: "DevOps Engineer",
    company: "CloudCore",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    description: "William manages CI/CD pipelines and cloud infrastructure."
  },
  {
    id: 8,
    availability: "Unavailable",
    price: "$85/hr",
    name: "Sophia Thomas",
    role: "Software Engineer",
    company: "DevSolutions",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    description: "Sophia engineers efficient and maintainable software systems."
  },
  {
    id: 9,
    availability: "Available",
    price: "$68/hr",
    name: "Benjamin Taylor",
    role: "Frontend Developer",
    company: "PixelCraft",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    description: "Benjamin builds clean, interactive, and accessible web apps."
  },

];

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "40px",
        background: "#f3f4f6",
        minHeight: "100vh"
      }}
    >
      {jobsData.map((job) => (
      <JobCard
  key={job.id}
  availability={job.availability}
  price={job.price}
  name={job.name}
  role={job.role}
  company={job.company}
  description={job.description}
  image={job.image}
/>
      ))}
    </div>
  );
};

export default App;