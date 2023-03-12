const serverless = require("serverless-http");
const app = require("./app");

app.use("/.netlify/functions/server");
modules.exports.handler = serverless(app);

// const http = require("http");
// const app = require("./functions/app");
// const server = http.createServer(app);

// const port = process.env.PORT || 3000;
// server.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
