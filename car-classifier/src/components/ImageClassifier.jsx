import React, { useState } from "react";
import styles from "./ImageClassifier.module.css";

function App() {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [prediction, setPrediction] = useState(null);

  // Handle image upload from file
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
      setImageUrl(""); // Clear the URL field when a file is uploaded
    }
  };

  // Handle image URL submission
  const handleImageUrlChange = (event) => {
    setImageUrl(event.target.value);
    setPreviewUrl(event.target.value); // Show preview of the image URL
    setImage(null); // Clear the file input when a URL is used
  };

  const handlePrediction = async () => {
    if (!image && !imageUrl) {
      alert("Please upload an image or provide a URL!");
      return;
    }

    const apiUrl =
      image
        ? "https://turnerscarrecognition-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/36858a1b-3f74-4579-b4dc-8ea5542c65ec/classify/iterations/Iteration5/image"
        : "https://turnerscarrecognition-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/36858a1b-3f74-4579-b4dc-8ea5542c65ec/classify/iterations/Iteration5/url";
    const predictionKey = "EWs2zaEGs8lKYj6HgDlfbio3AC8q6LEPxrhfJMmHdszvfkh7xT52JQQJ99AKACL93NaXJ3w3AAAIACOGQ4xA";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Prediction-Key": predictionKey,
          "Content-Type": image ? "application/octet-stream" : "application/json",
        },
        body: image
          ? image // For file upload
          : JSON.stringify({ Url: imageUrl }), // For URL submission
      });

      if (!response.ok) {
        throw new Error("Prediction failed!");
      }

      const data = await response.json();
      if (data.predictions.length > 0) {
        const topPrediction = data.predictions.reduce((a, b) =>
          a.probability > b.probability ? a : b
        );
        setPrediction(topPrediction);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred during prediction.");
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Turners Cars Image Recognition</h1>
      </header>
      <main className={styles.main}>
        {/* File Upload Section */}
        <div className={styles.uploadSection}>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className={styles.uploadInput}
          />
        </div>
        {/* URL Upload Section */}
        <div className={styles.urlSection}>
          <input
            type="text"
            placeholder="Enter image URL"
            value={imageUrl}
            onChange={handleImageUrlChange}
            className={styles.urlInput}
          />
        </div>
        {/* Preview Image */}
        {previewUrl && <img src={previewUrl} alt="Preview" className={styles.previewImage} />}
        {/* Predict Button */}
        <button onClick={handlePrediction} className={styles.predictButton}>
          Predict
        </button>
        {/* Display Prediction Result */}
        {prediction && (
          <div className={styles.result}>
            <h2>Prediction Result</h2>
            <p>
              <strong>{prediction.tagName}</strong> ({(prediction.probability * 100).toFixed(2)}%)
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
