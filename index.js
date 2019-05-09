function getToken() {
  //return '50dcdfc003cf7ff8543f817ded4bdaf7c185134b';
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
return '';
}


function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${getToken()}`
      },
    method: 'POST'
  })
    .then(res => res.json())
  .then(json => showResults(json))
}


function showResults(json) {
document.getElementById('results').innerHTML = `<a href ="${json.html_url}">${json.html_url}</a>`
  //use this function to display the results from forking via the API
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
