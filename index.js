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
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };
    fetch('https://github.com/repos/gbs4ever/js-ajax-fetch-lab/issues',{
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        //"Content-Type": "application/json",
        Authorization: `token ${getToken()}`
        }

    })
  .then(res => res.json())
  .then(res => res.console.log(res));
  }
//   //use this function to create an issue based on the values input in index.html


function getIssues() {
  fetch('https://github.com/repos/gbs4ever/js-ajax-fetch-lab/issues',{

headers: {
      //"Content-Type": "application/json",
      Authorization: `token ${getToken()}`
      }

  })
  .then(res => res.json())
  .then(res => res.console.log(res))
  //document.getElementById('issues').innerHTML =
}
