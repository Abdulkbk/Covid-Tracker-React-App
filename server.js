const express = require('express');
const path = require('path');

// init app
const app = express()
const PORT = process.env.PORT || 4000;

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('covid-logs/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'covid-logs', 'build',  'index.html'))
    });
}

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));