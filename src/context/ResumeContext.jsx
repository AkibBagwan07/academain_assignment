import React, { createContext, useState, useContext, useEffect } from 'react';

const ResumeContext = createContext();

export const useResume = () => {
  return useContext(ResumeContext);
};

export const ResumeProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
    },
    education: {
      institution: '',
      degree: '',
      year: '',
    },
    workExperience: {
      company: '',
      role: '',
      duration: '',
      achievements: '',
    },
    skills: [],
    projects: {
      title: '',
      description: '',
      technologies: '',
    },
  });

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('userData'));
    if (savedData) {
      setUserData(savedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
  }, [userData]);

  const updateUserData = (data) => {
    setUserData(prev => ({ ...prev, ...data }));
  };

  return (
    <ResumeContext.Provider value={{ userData, updateUserData }}>
      {children}
    </ResumeContext.Provider>
  );
};
