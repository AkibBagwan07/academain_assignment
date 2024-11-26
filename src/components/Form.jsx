import React from 'react';
import { useResume } from '../context/ResumeContext';
import Select from 'react-select';
import "../styles/App.css"

const Form = () => {
  const { userData, updateUserData } = useResume();

  // Handle input changes for text fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update user data in the global state
    updateUserData({
      personalInfo: { ...userData.personalInfo, [name]: value },
      education: { ...userData.education, [name]: value },
      workExperience: { ...userData.workExperience, [name]: value },
      projects: { ...userData.projects, [name]: value }
    });
  };

  // Handle changes for multi-select field
  const handleSelectChange = (selectedOptions) => {
    const skills = selectedOptions ? selectedOptions.map(option => option.value) : [];
    updateUserData({ skills });
  };

  return (
    <form className='form'>
      <h2>Personal Info</h2>
      <input
        type="text"
        name="name"
        value={userData.personalInfo.name}
        onChange={handleInputChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={userData.personalInfo.email}
        onChange={handleInputChange}
        placeholder="Email"
      />
      <input
        type="text"
        name="phone"
        value={userData.personalInfo.phone}
        onChange={handleInputChange}
        placeholder="Phone"
      />
      <input
        type="text"
        name="linkedin"
        value={userData.personalInfo.linkedin}
        onChange={handleInputChange}
        placeholder="LinkedIn"
      />
      <input
        type="text"
        name="github"
        value={userData.personalInfo.github}
        onChange={handleInputChange}
        placeholder="GitHub"
      />

      <h2>Education</h2>
      <input
        type="text"
        name="institution"
        value={userData.education.institution}
        onChange={handleInputChange}
        placeholder="Institution"
      />
      <input
        type="text"
        name="degree"
        value={userData.education.degree}
        onChange={handleInputChange}
        placeholder="Degree"
      />
      <input
        type="text"
        name="year"
        value={userData.education.year}
        onChange={handleInputChange}
        placeholder="Year of Passing"
      />

      <h2>Work Experience</h2>
      <input
        type="text"
        name="company"
        value={userData.workExperience.company}
        onChange={handleInputChange}
        placeholder="Company"
      />
      <input
        type="text"
        name="role"
        value={userData.workExperience.role}
        onChange={handleInputChange}
        placeholder="Role"
      />
      <input
        type="text"
        name="duration"
        value={userData.workExperience.duration}
        onChange={handleInputChange}
        placeholder="Duration"
      />
      <textarea
        name="achievements"
        value={userData.workExperience.achievements}
        onChange={handleInputChange}
        placeholder="Achievements"
      />

      <h2>Skills</h2>
      <Select
        isMulti
        options={[
          { value: 'JavaScript', label: 'JavaScript' },
          { value: 'React', label: 'React' },
          { value: 'Node.js', label: 'Node.js' },
        ]}
        value={userData.skills.map(skill => ({ value: skill, label: skill }))}
        onChange={handleSelectChange}
      />

      <h2>Projects</h2>
      <input
        type="text"
        name="title"
        value={userData.projects.title}
        onChange={handleInputChange}
        placeholder="Project Title"
      />
      <textarea
        name="description"
        value={userData.projects.description}
        onChange={handleInputChange}
        placeholder="Project Description"
      />
      <input
        type="text"
        name="technologies"
        value={userData.projects.technologies}
        onChange={handleInputChange}
        placeholder="Technologies Used"
      />
    </form>
  );
};

export default Form;
