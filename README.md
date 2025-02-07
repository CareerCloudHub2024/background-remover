# AI Background Remover

A React application that allows users to remove backgrounds from images using AI powered by the PhotoRoom API - a secure, enterprise-grade solution.

## Features

- Upload images through drag & drop or file selection
- AI-powered background removal using PhotoRoom's secure API
- Preview original and processed images
- Download processed images
- Responsive design
- Loading state handling
- Enterprise-grade security
- GDPR compliant

## Prerequisites

- Node.js installed on your system
- PhotoRoom API key (Free tier - 100 requests/month)

## Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/ai-background-remover.git
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your PhotoRoom API key:
   ```
   REACT_APP_PHOTOROOM_API_KEY=your_photoroom_api_key_here
   ```

4. Start the development server
   ```bash
   npm start
   ```

## How to get a free API key

1. Go to [PhotoRoom API](https://www.photoroom.com/api/)
2. Click "Get API Key"
3. Sign up for a free account
4. Verify your email
5. Go to your dashboard and copy the API key
6. Paste it in your `.env` file

The free tier includes:
- 100 requests per month
- No credit card required
- Enterprise-grade security
- GDPR compliance
- Data privacy guarantees
- High-quality background removal
- Fast processing (average 1-2 seconds)
- Support for various image formats
- Commercial use allowed
- API status monitoring
- Technical support

## Security Features

- End-to-end encryption
- No image storage (images are processed and immediately deleted)
- GDPR compliant data handling
- Enterprise-grade API security
- Rate limiting and DDoS protection
- Regular security audits
- SSL/TLS encryption

## Usage

1. Open the application in your browser
2. Click the upload button or drag & drop an image
3. Wait for the AI to process your image
4. Download the processed image without background

## Dependencies

- react-dropzone: For drag & drop file uploads
- axios: For API requests
- @chakra-ui/react: For UI components

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
