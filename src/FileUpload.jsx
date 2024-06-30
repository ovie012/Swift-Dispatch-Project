import React, { useState } from "react";
import upload from "./assets/RAR--Icon-Upload.svg";

const FileUpload = () => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    setFileName(event.target.files[0].name);
  };

  return (
    <>
      <p className="custom-label mb-2">Attach Documents</p>
      <div className="file-upload">
        <label htmlFor="file-input" className="file-upload-label">
          <input
            type="file"
            id="file-input"
            className="file-input"
            onChange={handleFileChange}
          />
          <div className="file-upload-text">
            <img src={upload} alt="Upload Icon" className="upload-icon" />
            <p>
              {fileName ? `Selected file: ${fileName}` : "Drag & Drop Here"}
              <br />
              {fileName ? "Selected file: ${fileName}" : "or"}
              <br />
              {fileName ? "" : "Browse Here"}
            </p>
          </div>
        </label>
      </div>
      <div>
        <button type="submit" className="submit-first">
          Submit Report
        </button>
      </div>
    </>
  );
};

export default FileUpload;
