"use client";
import styles from "./drag.module.css";
import React, { useState, useRef } from "react";

export const DragComponent = () => {
  const [isDragActive, setIsDragActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragActive(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragActive(false);

    const files = Array.from(e.dataTransfer.files);
    setSelectedFiles(files);
  };

  const handleFileInputChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  return (
    <div
      className={styles.dropzoneStyles}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => fileInputRef.current.click()}
    >
      {selectedFiles.length > 0 ? (
        <div>
          <p>Selected Files:</p>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {selectedFiles.map((file, index) => (
              <div
                key={index}
                style={{ marginRight: "10px", marginBottom: "10px" }}
              >
                <img
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                 className={styles.image}
                />
              </div>
            ))}
          </div>
        </div>
      ) : isDragActive ? (
        <p>Drop the files here...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={handleFileInputChange}
        multiple
      />
    </div>
  );
};

