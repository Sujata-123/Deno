//from fs module we import file system
// const fs=require('fs').promises;
// const text = 'This is a test - and it should be stored in a file!';
// fs.writeFile('node-message.txt',text).then(()=>{
//     console.log('wrote file!');
// })

const http=require('http')
const server=http.createServer((req,res)=>{
    res.end('hello world from node')
})
server.listen(3000);