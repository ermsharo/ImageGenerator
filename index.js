var fs = require('fs'),
    http = require('http'),
    https = require('https');

var Stream = require('stream').Transform;

// Download Image Helper Function
var downloadImageFromURL = (url, filename, callback) => {

    var client = http;
    if (url.toString().indexOf("https") === 0) {
        client = https;
    }

    client.request(url, function(response) {
        var data = new Stream();

        response.on('data', function(chunk) {
            data.push(chunk);
        });

        response.on('end', function() {
            fs.writeFileSync(filename, data.read());
        });
    }).end();
};

// Calling Function to Download
downloadImageFromURL('https://onlinewebtutorblog.com/wp-content/uploads/2021/05/cropped-cropped-online-web-tutor-logo.png', 'onlinewebtutor.png');
