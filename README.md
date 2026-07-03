Skinstric AI

Skinstric AI is a React web app that recreates a skincare analysis flow. I built this project to practice creating a multi-step user experience with React, Vite, React Router, Tailwind CSS, form validation, image upload, camera access, API calls, and result pages.

What The App Does

This app guides users through a skincare analysis process. Users enter basic information, choose whether to use their camera or upload an image, wait while the image is analyzed, and then view estimated results like demographics.

Main Features

Landing Page -
The landing page has a clean Skinstric-style design with animated hover interactions and a call-to-action to start the analysis.

Intro Form -
Users enter their name and location before starting. The form checks that the input is valid and sends the data to the Skinstric phase-one API.

Upload Options -
Users can choose between two options:

Take a selfie with the camera -
Upload an image from their gallery

Camera Selfie -
The selfie page asks for camera access, shows a live camera preview, lets the user capture an image, and saves the image for analysis.

Image Upload -
The upload page lets users select an image file from their device. The image is converted to base64 and saved before moving to the analysis step.

Analyzing Step -
The analyzing page sends the saved image to the Skinstric phase-two API and stores the returned analysis data.

Results Page -
The results page shows analysis categories such as demographics, skin type details, cosmetic concerns, and weather.

Demographics Page -
The demographics page displays predicted race, age, and gender results with confidence percentages. Users can select a different result if the AI estimate is wrong.

Live Link

skinstric-ai-three.vercel.app

<img width="1998" height="1444" alt="image" src="https://github.com/user-attachments/assets/e2fa9dd5-0b2a-4be2-b295-87b44d401287" />
