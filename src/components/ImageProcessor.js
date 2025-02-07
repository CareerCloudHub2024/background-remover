import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { Button } from './ui/button';
import { processImage } from '../services/api';

const ImageProcessor = ({
  selectedImage,
  processedImage,
  setProcessedImage,
  isProcessing,
  setIsProcessing,
  onError,
}) => {
  const [showProcessButton, setShowProcessButton] = useState(true);

  const handleProcessImage = async () => {
    if (selectedImage) {
      setIsProcessing(true);
      try {
        const result = await processImage(selectedImage);
        setProcessedImage(result);
        setShowProcessButton(false);
      } catch (error) {
        onError(error);
      } finally {
        setIsProcessing(false);
      }
    }
  };

  const handleDownload = () => {
    if (processedImage) {
      const link = document.createElement('a');
      link.href = processedImage;
      link.download = 'processed-image.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="flex flex-col space-y-6 w-full">
      {isProcessing && (
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-blue-500 animate-pulse" />
        </div>
      )}
      
      <div className="flex flex-wrap justify-center gap-8">
        <div className="p-4 bg-white rounded-xl shadow-lg max-w-[400px]">
          <p className="mb-3 font-bold text-gray-800">Original Image</p>
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Original"
            className="rounded-md"
          />
        </div>

        {processedImage && (
          <div className="p-4 bg-white rounded-xl shadow-lg max-w-[400px]">
            <p className="mb-3 font-bold text-gray-800">Processed Image</p>
            <img
              src={processedImage}
              alt="Processed"
              className="rounded-md"
            />
          </div>
        )}
      </div>

      <div className="flex justify-center gap-4">
        {showProcessButton && (
          <Button
            onClick={handleProcessImage}
            disabled={isProcessing}
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            {isProcessing ? 'Processing...' : 'Remove Background'}
          </Button>
        )}

        {processedImage && (
          <Button
            onClick={handleDownload}
            className="bg-green-500 hover:bg-green-600 text-white"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Image
          </Button>
        )}
      </div>
    </div>
  );
};

export default ImageProcessor;
