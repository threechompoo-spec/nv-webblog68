const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Routes
require('./routes')(app);

const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});