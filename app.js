const express = require('express');
const { auth } = require("express-oauth2-jwt-bearer");

// Configuracion Middleware con el Servidor de Autorización
const autenticacion = auth({
    audience: "http://localhost:3000/api/productos",
    issuerBaseURL: "https://dev-utn-frc-iaew.auth0.com/",
    tokenSigningAlg: "RS256",
    });
const app = express ();
app.use(express.json());

// Importamos el router de Libros

const librosRouter = require ('./routes/libros');

//Configuramos el middleware de autenticacion
app.use("/libros", autenticacion, librosRouter);    


// Importamos el middleware Error Handler
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);


app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});