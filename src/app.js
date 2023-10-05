const express = require('express');
const path = require('path');
const mainRoutes = require('./routes/main');
const userRouter = require('./routes/user');
const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));
app.use('/', mainRoutes); 
app.get('/login', userRouter);
app.get('/register', userRouter);

const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log(`Servidor iniciado en http://localhost:${port}`);
});