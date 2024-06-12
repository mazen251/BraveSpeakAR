import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Card, CardBody, CardTitle } from 'reactstrap';

const UploadVideo = () => {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the uploaded files
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const dropzoneStyle = {
    border: '2px dashed #cccccc',
    borderRadius: '10px',
    padding: '40px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'border 0.3s ease',
    position: 'relative',
    overflow: 'hidden',
  };

  const dropzoneActiveStyle = {
    borderColor: '#007bff',
  };

  const uploadIconStyle = {
    fontSize: '48px',
    marginBottom: '20px',
    transition: 'transform 0.3s ease',
  };

  const uploadTextStyle = {
    fontSize: '16px',
    color: '#666666',
    transition: 'opacity 0.3s ease',
  };

  return (
    <div className="content">
      <Card>
        <CardBody>
          <CardTitle tag="h4">Upload Video</CardTitle>
          <div
            {...getRootProps()}
            style={{
              ...dropzoneStyle,
              ...(isDragActive ? dropzoneActiveStyle : {}),
              ...(isDragActive && {
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }),
            }}
          >
            <input {...getInputProps()} />
            <p
              style={{
                ...uploadIconStyle,
                ...(isDragActive && {
                  transform: 'scale(1.2)',
                }),
              }}
            >
              &#8673;
            </p>
            <p style={uploadTextStyle}>
              {isDragActive ? 'Drop the video here' : 'Drag & drop a video file here, or click to select a file'}
            </p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default UploadVideo;
