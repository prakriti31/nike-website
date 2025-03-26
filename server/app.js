const express = require('express');
const session = require('express-session');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Connect to MongoDB
connectDB();

// Middlewares
app.use(express.json());
// CORS configuration to allow both origins
const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:5001'];

app.use(cors({
    origin: function(origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
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
app.use('/api/products', require('./routes/product'));
app.use('/api/categories', require('./routes/categories'));  // New categories route
app.use('/api/cart', require('./routes/cart'));  // New cart routes
app.use('/api/orders', require('./routes/orders'));  // Add the new orders route
app.use('/api/ai', aiRouter);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
