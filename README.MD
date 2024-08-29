1BunchFlower Shop

Introduction
1BunchFlower Shop is an online flower shop where users can browse a variety of floral arrangements, add items to their cart, and securely purchase them. The platform is built using the MERN stack (MongoDB, Express.js, React, and Node.js) and aims to provide a smooth and user-friendly shopping experience.

Features
Browse and search for flowers by category, occasion, or price range
Detailed product pages with high-quality images and descriptions
Add items to the shopping cart and manage cart contents
User authentication and profile management
Secure checkout process with payment integration
Admin panel for managing products, orders, and users
Pagination and filtering options for large product catalogs
Technologies Used
Frontend: React.js, Redux, React Bootstrap, React Router
Backend: Node.js, Express.js
Database: MongoDB with Mongoose ODM
State Management: Redux Toolkit
API: RESTful API with JWT authentication
Styling: CSS, Bootstrap
Tools: Postman, Git, Webpack, Babel
Installation
Prerequisites
Node.js (v14 or later)
MongoDB (running locally or using a cloud service like MongoDB Atlas)
Git
Steps
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/1bunchflower-shop.git
Navigate to the project directory:

bash
Copy code
cd 1bunchflower-shop
Install dependencies for both the frontend and backend:

bash
Copy code
npm install
cd frontend
npm install
Create a .env file in the root of the project and add the following environment variables:

env
Copy code
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Start the development server:

bash
Copy code
npm run dev
The application should now be running on http://localhost:3000.

Usage
Admin Features: To access the admin panel, log in with an admin account. From there, you can manage products, orders
Customer Features: Customers can browse products, add items to their cart, and proceed to checkout after logging in or registering an account.
Project Structure
