# Ingri Backend Server

Backend server for the Ingri website clone using Node.js, Express.js, and MongoDB Atlas.

## Folder Structure

```
server/
├── config/
│   └── db.js              # MongoDB connection configuration
├── models/
│   ├── Blog.js            # Blog post schema
│   ├── Contact.js         # Contact form schema
│   ├── Job.js             # Job opening schema
│   ├── Newsletter.js      # Newsletter subscriber schema
│   └── Recipe.js          # Recipe schema
├── controllers/
│   ├── blogController.js  # Blog API logic
│   ├── contactController.js # Contact form API logic
│   ├── jobController.js   # Job API logic
│   ├── newsletterController.js # Newsletter API logic
│   └── recipeController.js # Recipe API logic
├── routes/
│   ├── blogRoutes.js      # Blog API routes
│   ├── contactRoutes.js   # Contact form routes
│   ├── jobRoutes.js       # Job routes
│   ├── newsletterRoutes.js # Newsletter routes
│   └── recipeRoutes.js    # Recipe routes
├── app.js                 # Express app configuration
├── server.js              # Server entry point
├── seed.js                # Database seeding script
├── .env                   # Environment variables
└── package.json           # Dependencies
```

## API Endpoints

### POST /api/contact
Submit contact form data.
- **Body**: `{ name, email, phone, subject, message }`
- **Response**: `{ success: true, message: "Contact form submitted successfully" }`

### POST /api/newsletter
Subscribe to newsletter.
- **Body**: `{ email }`
- **Response**: `{ success: true, message: "Successfully subscribed to newsletter" }`
- **Note**: Prevents duplicate email subscriptions.

### GET /api/blogs
Get all blog posts.
- **Response**: `{ success: true, data: [blogs] }`

### GET /api/recipes
Get all recipes.
- **Response**: `{ success: true, data: [recipes] }`

### GET /api/jobs
Get all job openings.
- **Response**: `{ success: true, data: [jobs] }`

## Packages Installed

### Dependencies
- `cors@^2.8.5` - Enable CORS
- `dotenv@^16.4.5` - Load environment variables
- `express@^4.18.2` - Web framework
- `mongoose@^8.0.3` - MongoDB ODM

### Dev Dependencies
- `nodemon@^3.0.2` - Auto-restart server on changes

## Terminal Commands

### Install Dependencies
```bash
cd server
npm install
```

### Run Development Server
```bash
npm run dev
```

### Run Production Server
```bash
npm start
```

### Seed Database with Initial Data
```bash
npm run seed
```

## MongoDB Atlas Setup Instructions

1. **Create MongoDB Atlas Account**
   - Go to https://www.mongodb.com/cloud/atlas
   - Sign up for a free account

2. **Create a Cluster**
   - Click "Build a Database"
   - Select "Free" tier
   - Choose a cloud provider and region (closest to you)
   - Name your cluster (e.g., "ingri-cluster")
   - Click "Create"

3. **Create Database User**
   - Go to "Database Access" in the left sidebar
   - Click "Add New Database User"
   - Choose "Password" authentication
   - Enter username and password (save these!)
   - Select "Read and write to any database"
   - Click "Add User"

4. **Whitelist IP Address**
   - Go to "Network Access" in the left sidebar
   - Click "Add IP Address"
   - Select "Allow Access from Anywhere" (for development)
   - Or add your specific IP address
   - Click "Confirm"

5. **Get Connection String**
   - Go to "Database" in the left sidebar
   - Click "Connect" on your cluster
   - Select "Connect your application"
   - Choose "Node.js" and version
   - Copy the connection string

6. **Update .env File**
   - Replace the connection string in `server/.env`:
   ```
   MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/ingri?retryWrites=true&w=majority
   ```
   - Replace `YOUR_USERNAME`, `YOUR_PASSWORD`, and `YOUR_CLUSTER` with your actual values

## How to Run Frontend and Backend Together

### Terminal 1 - Backend
```bash
cd server
npm install
npm run dev
```
Backend will run on http://localhost:5000

### Terminal 2 - Frontend
```bash
cd ..
npm run dev
```
Frontend will run on http://localhost:5173 (or similar)

### Seed Database (First Time Only)
Before running the server for the first time, seed the database:
```bash
cd server
npm run seed
```

## Changes Made to Frontend

### 1. Contact Form (src/pages/Contact/Contact.jsx)
- Modified `handleSubmit` function to submit data to POST /api/contact
- Added fetch API call with error handling
- Replaced console.log and alert with actual API submission

### 2. Blog Page (src/pages/Blog/Blog.jsx)
- Added `useEffect` and `useState` hooks
- Removed hardcoded `blogPosts` array
- Added fetch call to GET /api/blogs on component mount
- Modified newsletter form to submit to POST /api/newsletter
- Added loading state for better UX

### 3. Recipes Page (src/pages/Recipes/Recipes.jsx)
- Added `useEffect` and `useState` hooks
- Removed hardcoded `recipes` array
- Added fetch call to GET /api/recipes on component mount
- Added loading state for better UX

### 4. Careers Page (src/pages/Careers/Careers.jsx)
- Added `useEffect` and `useState` hooks
- Removed hardcoded `jobOpenings` array
- Added fetch call to GET /api/jobs on component mount
- Modified UI to display jobs from API when available
- Added loading state for better UX
- Added conditional rendering for job cards vs "no openings" message

## Important Notes

- Images are stored in the React assets folder, not in MongoDB
- MongoDB only stores image filenames/paths as strings
- The frontend UI, CSS, layout, components, animations, spacing, and responsiveness remain exactly the same
- Only hardcoded data arrays were replaced with API calls
- Forms now submit to backend instead of just showing alerts
- All API calls use fetch() with proper error handling
- Backend validates all incoming data and returns appropriate HTTP status codes
