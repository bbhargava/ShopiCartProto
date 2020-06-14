const express = require('express');
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + '/shopping-cart/build/'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/shopping-cart/build/index.html'));
})

app.listen(port, () => {
  console.log(`Server is runing on port: ${port}`);
});
