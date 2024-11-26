import React, { forwardRef } from 'react';
import { useResume } from '../context/ResumeContext';

const ResumePreview = forwardRef((props, ref) => {
  const { userData } = useResume();

  return (
    <div className="resume-preview" ref={ref}>
      <h1>{userData?.personalInfo?.name}</h1>
      <p>{userData?.personalInfo?.email} | {userData?.personalInfo?.phone}</p>
      <p>{userData?.personalInfo?.linkedin} | {userData?.personalInfo?.github}</p>

      <h3>Education</h3>
      <p>{userData?.education?.institution}, {userData?.education?.degree}, {userData?.education?.year}</p>

      <h3>Work Experience</h3>
      <p>{userData?.workExperience?.company} - {userData?.workExperience?.role}</p>
      <p>{userData?.workExperience?.duration}</p>
      <p>{userData?.workExperience?.achievements}</p>

      <h3>Skills</h3>
      <ul>
        {userData?.skills?.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h3>Projects</h3>
      <p>{userData?.projects?.title} - {userData?.projects?.description}</p>
      <p>{userData?.projects?.technologies}</p>
    </div>
  );
});

export default ResumePreview;
