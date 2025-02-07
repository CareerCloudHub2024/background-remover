import React, { useState } from 'react';
import ImageUploader from './components/ImageUploader';
import ImageProcessor from './components/ImageProcessor';
import { Alert, AlertDescription } from './components/ui/alert';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  const handleError = (error) => {
    setError('Failed to process image. Please try again.');
    setTimeout(() => setError(null), 5000);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col space-y-8">
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            AI Background Remover
          </h1>
          <p className="text-gray-600">
            Upload an image and let AI remove the background instantly
          </p>
        </div>
        
        <ImageUploader 
          onImageSelect={setSelectedImage}
          isProcessing={isProcessing}
        />
        
        {selectedImage && (
          <ImageProcessor
            selectedImage={selectedImage}
            processedImage={processedImage}
            setProcessedImage={setProcessedImage}
            isProcessing={isProcessing}
            setIsProcessing={setIsProcessing}
            onError={handleError}
          />
        )}
      </div>
    </div>
  );
}

export default App;
