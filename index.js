const express = require('express');

const server = express();

server.use(() => {
  console.log('server listen port: 4000...');
});

server.listen(4000);
