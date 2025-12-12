import server from '../react-Zero-master/server.js'

//clietn fetchdata, server jsonparse, send json string, accessing it by client jsonparse
const allRoutes = {
    'submit-response' : (req, res, data)=>{
        try{
            res.writeHead(200, {"Content-Type" : "application/json"})
            const fetchBack = JSON.stringify(data) 
            res.end(fetchBack)
        } catch(error){
            console.log(error)
            res.writeHead(400, {"Content-Type" : "text/plain"})
        }
    }
}

server(allRoutes)