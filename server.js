require('dotenv').config();

const path = require('path');
const express = require('express');
const app = express();

// Definir directorio público
const publicDirectoryPath = path.join(__dirname, 'httpdocs');
app.use(express.static(publicDirectoryPath));

// Ruta para enviar el archivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(publicDirectoryPath, 'index.html'));
});

// Ruta para enviar el archivo style.css
app.get('/style.css', (req, res) => {
    res.sendFile(path.join(publicDirectoryPath, 'style.css'));
});

// Iniciar servidor
const hostname = '198.136.51.106';
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${port}`);
});
