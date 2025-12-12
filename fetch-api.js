import server from "../react-Zero-master/server.js";

const theData = {};
//clietn fetchdata, server jsonparse, send json string, accessing it by client jsonparse
const allRoutes = {
  "submit-response": (req, res, data) => {
    try {
      allRoutes = data;
      res.writeHead(200, { "Content-Type": "application/json" });
      const allRoutes = JSON.stringify({ status: "ok" });
      res.end(allRoutes);
    } catch (error) {
      console.log(error);
      res.writeHead(400, { "Content-Type": "text/plain" });
    }
  },
};

server(allRoutes);
