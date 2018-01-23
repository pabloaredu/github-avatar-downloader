var request = require('request');


// console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {

  var requestOptions = {
      host: repoOwner,
      path: repoName
    };

    request.get(requestOptions, function(response) {
      console.log('You are getting a response')
      // response.setEncoding('utf8');
      // var buffer = '';

      request.on('data', function(data) {
        buffer += data;
        console.log("on data");
      });

      // response.on('end', function() {
      //   cb(buffer);
      // });
    });
  }


getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});