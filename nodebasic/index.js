const http = require('http');
const files = require('fs')

let dataContainer = {}
let pages = ['/about.html','/contact-me.html']
pages.forEach( elem => {
    files.readFile('.' + elem,'utf-8',(err,data) => {
        if(err){
            console.log(err)
        }
        dataContainer[elem] = data
    })
})

let notFound 
files.readFile('./404.html','utf-8',(err,data) => {
    if(err){
    return '<html><body><p>Not Found</p></body></html>'
}
    notFound = data
})
let homepage
files.readFile('./index.html','utf-8',(err,data) => {
    if(err){
    return notFound
}
    homepage = data
})


const checkPath = function(urlPath){
    if(urlPath === '/'){
        return homepage
    }
    else if(pages.includes(urlPath)){
        return dataContainer[urlPath]
    }
    return notFound
}


const port =  3000
const server = http.createServer((req,res)=> {
    res.statusCode = 200
    res.setHeader('Content-type','text/html')
    res.end(checkPath(req.url))
})

server.listen(port)
