const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);

// The Home Page
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
// The Logic (Checking if it's Palindrome)
  else if (page == '/api'){
    if('word' in params){
      res.writeHead(200, {'Content-Type': 'application/json'});
      const word = params['word']

      //Got this from StackOverFlow:
      //Making Input Lowercase & Deleting anything that is not a letter or number.
      const fixInput = word.toLowerCase().replace(/[^a-z0-9]/g, '')
      const reverseIt = fixInput.split('').reverse().join('')

      let result
      if(fixInput === reverseIt){
        result = 'Palindrome'
      }
      else{
        result = "Not a Palindrome"
      }
      const objToJson = {
        yourWord: word,
        result: result
      }
      res.end(JSON.stringify(objToJson));
    }
  }
// CSS File
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
// Main File
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
// Images File
    }else if (page == '/images/vector.jpg'){
    fs.readFile('images/vector.jpg', function(err, data) {
      res.writeHead(200, {'Content-Type': 'image/jpeg'});
      res.write(data);
      res.end();
    });
// Anything else: 404!! (Page Not Found)
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
