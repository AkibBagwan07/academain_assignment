import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import "../styles/App.css";
import ResumePreview from './ResumePreview';  

const ExportButton = () => {
  const resumeRef = useRef();

  const handlePrint = useReactToPrint({
    contentRef: resumeRef,  
    documentTitle: 'Resume',  
  });

  return (
      <div className='component-parent'>
          <ResumePreview ref={resumeRef} />
          <div className='btn-parent'>
              <button className='export-btn' onClick={handlePrint}>
        Export as PDF
      </button>
          </div>
    </div>
  );
};

export default ExportButton;
