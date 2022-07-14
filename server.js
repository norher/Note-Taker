const express = require('express');
const notes = require('./routes/notes')
const index = require('./routes/index');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));

app.use('/api', notes);
app.use('/', index)

app.listen(PORT, () => {
    console.log(`Server listeing on http://localhost:${PORT}`);
})