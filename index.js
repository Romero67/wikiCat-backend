const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const {config} = require('./config')

//use the libs
require('dotenv').config();
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));


//setup routes
app.use('/api/cat', require('./routes/cat.route'));
app.use('/', (req, res) =>{
    const html = `
        <html>
            <head>Api Cat Wiki</head>
            <body>
            # Portfolio
            <br>

            Este proyecto utiliza una API de prueba para propósitos de desarrollo y pruebas. La API utilizada proporciona datos de ejemplo y no debe considerarse como una fuente de datos en producción.
            <br>
            ## Aclaración sobre la API
            <br>
            
            La API utilizada en este proyecto es solo para pruebas y desarrollo del portfolio. Los datos proporcionados por esta API son ficticios y no deben considerarse como información real o en producción. Esta elección se hizo con el propósito de demostrar las capacidades del proyecto y mejorar la experiencia del portafolio.
            <br>
            Para obtener información real y actualizada sobre mi trabajo y proyectos, por favor, visite mi [sitio web oficial](https://www.tusitio.com).
            <br>
            ## Créditos
            <br>
            
            - **API de Prueba:** <a href="https://thecatapi.com/">The api cat</a>
            <br>
            - **Desarrollador del Portfolio:** <a href="https://marianoromero.ar">Mariano Romero Abadie</a>
            
            </body>
        </html>
    `
    res.send(html)
});

//listen to port

app.listen(config.port, () => console.log(`server onn port ${config.port}`));