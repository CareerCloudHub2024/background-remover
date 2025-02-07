import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload } from 'lucide-react';

const ImageUploader = ({ onImageSelect, isProcessing }) => {
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      onImageSelect(file);
    }
  }, [onImageSelect]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    disabled: isProcessing,
    multiple: false
  });

  return (
    <div
      {...getRootProps()}
      className={`w-full p-10 border-3 border-dashed rounded-xl cursor-pointer transition-all duration-200
        ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'}
        ${isProcessing ? 'cursor-not-allowed' : 'hover:border-blue-500 hover:scale-[1.01]'}`}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center space-y-3">
        <Upload 
          className={`w-10 h-10 ${isDragActive ? 'text-blue-500' : 'text-gray-400'}`}
        />
        <p className="text-center font-medium text-gray-500">
          {isDragActive
            ? "Drop your image here"
            : isProcessing
            ? "Processing current image..."
            : "Drag & drop an image here, or click to select"}
        </p>
        <p className="text-sm text-gray-500">
          Supports JPG, JPEG, PNG
        </p>
      </div>
    </div>
  );
};

export default ImageUploader;
