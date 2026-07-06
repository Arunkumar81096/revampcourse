const http = require('http');
const server = http.createServer((req,res) => {
	res.write("Hello from the Node JS Application");
	res.end();
}
)
server.listen(3000,()=>{
console.log("Application is running on port 3000")
})
