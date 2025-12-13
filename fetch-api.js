import server from "../react-Zero-master/server.js";

let savedData = {};
//clietn fetchdata, server jsonparse, send json string, accessing it by client jsonparse
const allRoutes = {
  "submit-response": (req, res, data) => {
    try {
      if (req.method === "POST") {
        //save teh psot data into the object so we can return it a GET..
        savedData = data;
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ status: "ok" }));
      } else if (req.method === "GET") {
        //better to specify the request method.
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(savedData));
      }
    } catch (error) {
      console.log(error);
      res.writeHead(400, { "Content-Type": "text/plain" });
    }
  },
};

server(allRoutes);
