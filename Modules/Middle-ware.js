require('dotenv').config();

const express = require('express');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const authMiddleware = require('./authMiddleware');

const app = express();
app.use(express.json());

const SECRET_KEY = 'mysecretkey';
const USERS_FILE = './users.json';

// Function to read users from JSON file
const readUsers = () => {
    const data = fs.readFileSync(USERS_FILE);
    return JSON.parse(data);
};

// Function to generate a JWT token
const generateToken = (user) => {
    return jwt.sign(
        { id: user.id, username: user.username },
        SECRET_KEY,
        { expiresIn: '1h' }
    );
};
