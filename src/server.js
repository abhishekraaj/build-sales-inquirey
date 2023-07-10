const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// ...other server configurations

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
