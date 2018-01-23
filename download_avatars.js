var request = require('request');


// console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  var url = "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors";
  request(url, function(err, res, body) {
    cb(err, body);
  });
}


    // request.get(requestOptions, function(response) {
    //   // console.log('You are getting a response')
    //   })
    //   .on('error', function(err){
    //     throw err;
    //   })
    //   .on('response', function (response) {

    //   });



getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});

// function getRepoContributors(repoOwner, repoName, cb) {
//   var url = "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors";
//   request(url, function(err, res, body) {
//     cb(err, body);
//   });
// }