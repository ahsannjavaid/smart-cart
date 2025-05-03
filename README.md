# Smart Cart - Project Setup

Follow the steps below to set up and run the project locally.

## 🚀 Cloning the Repository

```bash
git clone <repository-url>
cd <repository-directory>
```

## 📦 Install Dependencies

Navigate to both the `frontend` and `backend` directories and run:

```bash
npm install
```

Example:

```bash
cd frontend
npm install

cd ../backend
npm install
```

## 🔐 Environment Variables

In the `backend` directory, create a `.env` file and add the following environment variables:

```env
MONGO_URI=your_mongo_connection_string
AES_SECRET=your_aes_secret
JWT_SECRET=your_jwt_secret
```

> ⚠️ **Important:** Never share your actual environment variable values publicly or commit them to version control.

## ▶️ Running the Project

Start both frontend and backend servers using:

```bash
# In frontend directory
npm start

# In backend directory
npm run dev
```

## ✅ You're all set!

Your project should now be running locally at `http://localhost:3000`.
