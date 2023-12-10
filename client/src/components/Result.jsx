import React, { useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { pdfjs } from 'react-pdf';

const Result = () => {
  const [show, setShow] = useState(false);
  const [fileURL, setFileURL] = useState('');
  const [currResume, setCurrResume] = useState('');

  const handleShow = async (filepath) => {
    setShow(false);
    try {
      const res = await fetch('http://localhost:8000/showfile/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `url=${filepath}`,
      });
      const data = await res.blob();
      const objURL = URL.createObjectURL(data);
      setFileURL(objURL);
      setShow(true);
      setCurrResume(filepath);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {/* Your existing code or components here */}
      {show && (
        <div>
          <Worker
            workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}
          >
            <Viewer fileUrl={fileURL} />
          </Worker>
        </div>
      )}
    </div>
  );
};

export default Result;
