const https = require('https')
const {auth} = require('./token')

console.log("Auth: ", auth);

// const data = JSON.stringify({
//   grant_type: 'client_credentials',
//   client_id: '<ID>',
//   client_password: '<PASSWORD>'
// })

// const options = {
//   hostname: 'api-school.kinderlime.com',
//   path: '/api/v1/authorize',
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Content-Length': data.length,
//     "Accept": "application/json, text/plain, */*",
//             "Accept-Language": "en-US,en;q=0.5",
//             "Accept-Encoding": "gzip, deflate, br",
//             "Cache-Control": "no-cache",
//             "Connection": "keep-alive",
//             "DNT": 1,
//             "Host": "api-school.kinderlime.com",
//             "Origin": "https://schools.procareconnect.com",
//             "Pragma": "no-cache",
//             "Referer": "https://schools.procareconnect.com/",
//             "Sec-Fetch-Dest": "empty",
//             "Sec-Fetch-Mode": "no-cors",
//             "Sec-Fetch-Site": "cross-site",
//             "Sec-GPC": "1",
//             "TE": "trailers",
//             "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:90.0) Gecko/20100101 Firefox/90.0"
//   }
// }

// const req = https
//   .request(options, res => {
//     let data = ''

//     console.log('Status Code:', res.statusCode)

//     res.on('data', chunk => {
//       data += chunk
//     })

//     res.on('end', () => {
//       console.log('Body: ', JSON.parse(data))
//     })
//   })
//   .on('error', err => {
//     console.log('Error: ', err.message)
//   })

// req.write(data)
// req.end()



// var http = require('http');
// var url = require('url');

// http.createServer(function (req, res) {
//   var q = url.parse(req.url, true);
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World! url:', q);
// }).listen(8080);
