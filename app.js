const express = require('express')
const app = express()

app.get('/',(req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

const port = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('server is running: ', PORT)
});
