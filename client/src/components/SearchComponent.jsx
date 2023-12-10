import React, { useState, useEffect } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { pdfjs } from 'react-pdf';
import { RiSearchLine } from 'react-icons/ri';

const SearchResult = () => {
  const [show, setShow] = useState(false);
  const [currResume, setCurrResume] = useState('');
  const [resumeList, setResumeList] = useState([]);
  const [fileURL, setFileURL] = useState('');
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const [query, setQuery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:8000/resume/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: query.toLowerCase() }),
    })
      .then((res) => res.json())
      .then((data) => {
        let resumeList = [...data.data.split(/[$]/i)];
        if (resumeList[0] === '') {
          setResumeList([]);
        } else {
          setResumeList(resumeList);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleShow = async (filepath) => {
    setShow(false);
    await fetch('http://localhost:8000/showfile/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `url=${filepath}`,
    })
      .then((res) => res.blob())
      .then((data) => {
        const objURL = URL.createObjectURL(data);
        setFileURL(objURL);
        setShow(true);
        setCurrResume(filepath);
      })
      .catch((err) => console.log(err));
  };

  const handleSearchInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={handleSearchInputChange}
            className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white p-3 rounded-md flex items-center justify-center hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            <RiSearchLine />
          </button>
        </div>
      </div>
      <div style={{ display: 'flex', marginTop: '10px' }}>
        <div
          style={{
            border: '1px solid rgba(0, 0, 0, 0.3)',
            height: '600px',
            width: 'calc(100vw - 180px)',
          }}
        >
          {show && (
            <Worker
              workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}
            >
              <Viewer fileUrl={fileURL} plugins={[defaultLayoutPluginInstance]} />
            </Worker>
          )}
        </div>
        <div
          style={{
            height: '600px',
            width: '160px',
            overflowY: 'auto',
            marginLeft: '10px',
          }}
        >
          <h3>Top 10 Resumes</h3>
          {resumeList.length > 0 ? (
            resumeList.map((ele, index) => (
              <div
                key={index}
                onClick={() => {
                  handleShow(ele);
                }}
                style={{
                  cursor: 'pointer',
                  paddingTop: '5px',
                  paddingBottom: '5px',
                  background: ele === currResume ? 'cyan' : '#fff',
                }}
              >
                Resume {index + 1}
              </div>
            ))
          ) : (
            <p>No resume</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
