const express = require('express');
const session = require('express-session');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Connect to MongoDB
connectDB();

// Middlewares
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', // your React client URL
    credentials: true,
}));

// Express session middleware
app.use(session({
    secret: process.env.SESSION_SECRET || 'secretSessionKey',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // set secure:true if using HTTPS
}));

// Routes
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
