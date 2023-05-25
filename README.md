# AI Image Generator

AI Image Generator is a MERN full-stack application that can generate images based on user prompts. In addition, users can share the generated image on the community page. Other users can later download the generated images for their personal use.

<img width="697" alt="Screen Shot 2023-05-24 at 10 59 29 PM" src="https://github.com/pichsophaneatdy/AI-Image-Generator/assets/95105372/a838a2e5-090e-4c18-b5b6-15552b3f0cfb">


## Technologies Used

### Front-end
- React
- JavaScript
- Tailwind CSS
- FileSaver.js (for saving generated file on the client side)

### Back-end
- Node.js
- Express.js
- MongoDB
- Cloudinary (for media management)
- OpenAI API (for generating images with DALL-E)

## Features 

<img width="197" alt="Screen Shot 2023-05-24 at 10 47 05 PM" src="https://github.com/pichsophaneatdy/AI-Image-Generator/assets/95105372/994d78cb-425e-477f-ab84-b090a2af9508">

- Generate unique images based on user prompts
- Share generated images on the home page
- Download generated images
- Simple and intuitive user interface

## Set Up

### Database Set Up

- Set up a MongoDB account at this link: https://www.mongodb.com/)
- Set up a new project and create a new cluster
- Connect to your application => grab the url
- In server folder, create a .env file in the root directory of the folder
- Add MONGODB_URL = YOUR MONGODB URL (Don't forget to input your password)

### Back-end Set up
- Create an account on Openai API at this link https://openai.com/blog/openai-api
- In the .env file, add OPENAI_API_KEY = YOUR KEY
- Create an account on cloudinary at https://cloudinary.com/. Go to dashboard and you will find your cloud name, api key, and api secret
- In the .env file, add:  
  - CLOUNDINARY_CLOUD_NAME = YOUR CLOUD NAME
  - CLOUNDINARY_API_KEY = YOUR API KEY
  - CLOUNDINARY_API_SECRET = YOUR API SECRET
- Start up your server and connect to your database by running npm start
 
### Front-end Set up

- npm install
- npm start
- In client folder, change the URL in your Home.jsx and CreatePost.jsx to "http://localhost:YOUR_PORT_NUMBER/PATH"
