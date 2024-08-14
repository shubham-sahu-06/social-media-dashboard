const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create a new user
app.post('/api/users', (req, res) => {
    const { email, linkedinURL, githubURL } = req.body;
    const sql = 'INSERT INTO users (email, linkedin, github) VALUES (?, ?, ?)';
    db.query(sql, [email, linkedinURL, githubURL], (err, result) => {
        if (err) throw err;
        res.send({ message: 'User created', userId: result.insertId });
    });
});

// Update user settings
app.put('/api/users/:id', (req, res) => {
    const { linkedinURL, githubURL } = req.body;
    const sql = 'UPDATE users SET linkedin = ?, github = ? WHERE id = ?';
    db.query(sql, [linkedinURL, githubURL, req.params.id], (err, result) => {
        if (err) throw err;
        res.send({ message: 'User updated' });
    });
});

// Get user data
app.get('/api/users/:email', (req, res) => {
    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [req.params.email], (err, result) => {
        if (err) throw err;
        res.send(result[0]);
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
