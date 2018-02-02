var request = require('request');
var token = require('./secrets');

console.log('Welcome to the GitHub Avatar Downloader!');

if (repo1 === undefined  || repo2 === undefined) {
  console.log("Please, give both arguments: owner and repo");
} else {

  console.log('Welcome to the GitHub Avatar Downloader!');

  function getRepoContributors(repoOwner, repoName, cb) {
    var options = {
      url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
      headers: {
        'User-Agent': 'pabloaredu',
        Authorization: 'token ' + secrets.GITHUB_TOKEN
      }
    };

    request(options, function(err, res, body) {
      cb(err, body);
    });
  }

  getRepoContributors(repo1, repo2, function(err, result) {
    if (err) {
      console.error("Error:", err);
    }
    console.log(result);
    var users = JSON.parse(result);
    users.forEach(user => {

      function downloadImageByURL(url, filePath) {
        request.get(url)
          .on('error', function (err) {
            throw err;
          })
          .on('response', function (response) {
            console.log('Response Status Code: ', response.statusCode);
          })
          .pipe(fs.createWriteStream(filePath));
      }
      downloadImageByURL(user.avatar_url, "pic/" + user.login + ".jpg");
    });
  });
}