var getRepoIssues = function(repo) {
    console.log(repo);
    var apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction=asc";

  };
  
var apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction=asc";

fetch(apiUrl).then(function(response) {
    // request was successful
    if (response.ok) {
      response.json().then(function(data) {
        // pass response data to dom function
        displayIssues(data);
      });
    }
    else {
      alert("There was a problem with your request!");
    }
  });

  var displayIssues = function(issues) {

};