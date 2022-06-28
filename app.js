const { setupRoutes } = require('./routes');
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

const port = process.env.PORT || 3000;

app.use(cookieParser(), express.json());

setupRoutes(app);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
