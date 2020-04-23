const daysOfWeek = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

function getDate(dateIn){
    let date = new Date(dateIn);
    return date.getUTCDay();
}

const http = require("http");

const host = "127.0.0.1";

const port = 3000;

const server = http.createServer();

server.on("request", (req,res) =>{
    if (req.method == "POST" && req.url == "/birth"){
        let body = [];

        req.on("data",chunk=>{
            body.push(chunk);
        }).on("end", () =>{
            res.writeHead(200, {"Content-type": "text/plain"});
            body = Buffer.concat(body).toString();
            let day = daysOfWeek[getDate(body)];
            res.end("Naciste un "+day);
        })
    } else{
        res.statusCode = 404;
        res.end();
    }
})


server.listen(port, host, () =>{
    console.log(`Server runing at http://${host}:${port}/`);
})

