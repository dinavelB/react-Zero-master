import server from "./server.js";

//here it has  no client, no fetch data on this dynamic route;
const sendData = {
    'sample' : (req, res, data) =>{
        const personInfo = {
            name: "Dinavel",
            age: 19,
            id: 241544
        }
        try{
            res.writeHead(200, {"Content-Type" : "application/json"})
            data = JSON.stringify(personInfo)
          res.end(data)
        }catch(err){d
            res.writeHead(400, {"Content-Type" : "text/plain"});
            res.end("cant send the data something must wrong")
        }
    }
}

server(sendData)