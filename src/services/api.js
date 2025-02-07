import axios from 'axios';

export const processImage = async (imageFile) => {
  try {
    const form = new FormData();
    form.append('image_file', imageFile);
    form.append('format', 'png');
    form.append('channels', '4');
    form.append('size', 'auto');
    form.append('crop', 'true');
    form.append('despill', 'true');

    const response = await axios({
      method: 'POST',
      url: 'https://sdk.photoroom.com/v1/segment',
      headers: {
        'Content-Type': 'multipart/form-data',
        'Accept': 'image/png, application/json',
        'x-api-key': process.env.REACT_APP_PHOTOROOM_API_KEY
      },
      data: form,
      responseType: 'arraybuffer'
    });

    // Convert arraybuffer to base64 using Uint8Array
    const uint8Array = new Uint8Array(response.data);
    const base64String = btoa(
      uint8Array.reduce((data, byte) => data + String.fromCharCode(byte), '')
    );
    
    return `data:image/png;base64,${base64String}`;
  } catch (error) {
    console.error('Error removing background:', error.response || error);
    throw error;
  }
};

