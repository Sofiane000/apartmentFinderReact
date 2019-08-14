const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3300;

app.use(express.static(__dirname +'/build'));

app.get('*', function(req, res) {
  res.sendFile(__dirname +'/build/index.html');
});

app.listen(PORT, () => {
  console.log("xxxxxxx xxxxxxxxx server connnected to the port " + PORT);
})