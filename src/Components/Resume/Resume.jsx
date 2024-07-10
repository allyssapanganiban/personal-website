import React, { useEffect } from 'react';

const Resume = () => {
  useEffect(() => {
    window.location.href = 'https://drive.google.com/file/d/1PqEmQvukeT4M2SO9fx9AHPdCUT_V26Y4/view?usp=sharing';
  }, []);

  return (
    <div>
      <p>Redirecting to the resume...</p>
    </div>
  );
};

export default Resume;