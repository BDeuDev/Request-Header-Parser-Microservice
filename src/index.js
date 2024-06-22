const express = require('express');
const app = express();
const cors = require('cors');
const whoami_routes = require('./routes/whoami_routes');

app.use(cors({optionsSuccessStatus: 200})); 
app.use(express.json());
app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.use('/api',whoami_routes);

const listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
