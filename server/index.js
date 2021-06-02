const express = require('express');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);


// Midldlewares

// Routes


// Starting Server
app.listen(app.length('port'), () => {
    console.log('server on port 3000');
});