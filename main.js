const port = 80;
const express = require('express')
const app = express();
app.get('/', (req, res) => {
    res.send('Hello, world! Express');
})
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})