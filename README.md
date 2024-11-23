Car Classifier App
An AI-powered web application that classifies car images and predicts the car type. Designed with Turners Cars styling, this app is user-friendly and functional, allowing users to upload an image via file or URL and displaying the top prediction result.

Features
Car Classification: Uses Azure Custom Vision to classify cars into categories such as SUV, Sedan, Hatchback, etc.
Top Prediction Display: Shows only the highest-probability prediction.
Image Upload: Supports both image file uploads and URL-based image uploads.
Turners Cars Branding: Styled to reflect Turners Cars' branding and design aesthetics.
Responsive Design: Optimized for use on multiple devices.
Getting Started
Prerequisites
Node.js and npm installed on your machine.
An Azure Custom Vision account (optional, for custom implementation).
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/<your-username>/<your-repo-name>.git
Navigate to the project directory:

bash
Copy code
cd car-classifier
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev
Open the app in your browser at http://localhost:5173.

Usage
Upload an image by clicking the "Choose File" button or enter an image URL.
Click "Submit" to classify the image.
The app will display the car type with the highest probability and preview the uploaded image.
Technologies Used
Frontend: React.js with Vite for fast development.
Styling: CSS Modules.
AI Service: Azure Custom Vision for image classification.

Screenshots
![image](https://github.com/user-attachments/assets/787491dc-51ab-45fe-ba9d-438ad37a1816)
![image](https://github.com/user-attachments/assets/5cf85b6f-9291-4ca4-8602-1f9fe0add240)

License
This project is not licensed. Feel free to use the code for educational purposes.
