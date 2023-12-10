# Resume Matching System

## Overview
This project aims to facilitate resume matching based on user queries. It comprises a React frontend for user interaction, a Django backend for handling data and APIs, and a resume parsing and indexing system.

## Team Details
- Poorv Kumar (S20210010178)

## Dataset Used  
- [Dataset link](https://www.kaggle.com/datasets/gauravduttakiit/resume-dataset)

## Components

### Frontend (React)
- **Directory:** `/client`
- **Installation:**
  - Run `npm install` to install dependencies.
- **Running the server:**
  - Execute `npm run dev` to start the frontend server.

### Backend (Django)
- **Directory:** `/server`
- **Running the server:**
  - Navigate to `/server/server/src` and execute `python generate.py` to generate the inverted indexes (`inverted_index.json`).
  - Then, inside the `/server` directory, run `python manage.py runserver` to start the backend development server.

## Functionality

### Resume Storage
- Resumes are stored in `/server/server/dependency/documents`.

### Indexing
- The `generate.py` file within `/server/server/src` parses the resumes and generates an inverted index for efficient search functionality.

### Search API
- Upon receiving a POST request to `/resume/` with a query, the backend utilizes the inverted index to calculate BM25 scores for the resumes.
- The top 10 relevant resumes based on the query are returned as a response to the frontend.

### Refining Search
- Implemented filter options to refine search results based on various parameters such as experience, skills, education, etc.
  - *Description:* Users can narrow down search results by applying filters like experience level, specific skills, education background, etc., providing more targeted and relevant resume matches.

### Feedback Capture
- Incorporated a feedback mechanism to capture user inputs on search results, improving system performance and relevance.
  - *Description:* Users can provide feedback on the relevance and accuracy of the displayed resumes, aiding in system enhancement and future search accuracy.

## Steps to Run

1. **Frontend:**
   - Navigate to `/client`.
   - Run `npm install`.
   - Execute `npm run dev`.

2. **Backend:**
   - Navigate to `/server/server/src`.
   - Run `python generate.py` to generate the inverted indexes (`inverted_index.json`).
   - Go back to `/server` directory.
   - Run `python manage.py runserver`.

## Notes
- Ensure all necessary dependencies are installed and configured.
- Make sure the file paths and directory structures match the descriptions provided.
