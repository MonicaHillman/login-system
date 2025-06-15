const http = require('http');
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const db = require('./db');
const { SECRET } = require('./auth');

const app = express();
app.use(cors());
app.use(express.json());

// Register
app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const passwordHash = await bcrypt.hash(password, 10);

  db.run(
    `INSERT INTO users (email, passwordHash) VALUES (?, ?)`,
    [email, passwordHash],
    function (err) {
      if (err) {
        return res.status(400).json({ message: 'Usuário já existe' });
      }
      res.status(201).json({ id: this.lastID, email });
    }
  );
});

// Login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.get(`SELECT * FROM users WHERE email = ?`, [email], async (err, user) => {
    if (err || !user) return res.status(401).json({ message: 'Usuário inválido' });

    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) return res.status(401).json({ message: 'Senha incorreta' });

    const token = jwt.sign({ email: user.email }, SECRET, { expiresIn: '1h' });
    res.json({ token });
  });
});

// Protected route example (optional)
const { authenticateToken } = require('./auth');
app.get('/profile', authenticateToken, (req, res) => {
  res.json({ message: `Olá, ${req.user.email}` });
});

// Start HTTP server
http.createServer(app).listen(3001, () => {
  console.log('🚀 HTTP server running at http://localhost:3001');
});
