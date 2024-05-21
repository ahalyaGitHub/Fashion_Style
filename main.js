const express = require('express');
const app = express();
const path = require('path');

app.get('/home', (req, res) => {
   
    res.sendFile(path.join(__dirname, 'home.html'));
});
app.get('/admin', (req, res) => {
 
    res.sendFile(path.join(__dirname, 'admin.html'));
});
app.get('/login', (req, res) => {

    res.sendFile(path.join(__dirname, 'login.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

