const gitRepoBase = 'https://api.github.com/repos'
const userUrl = `${gitRepoBase}/LLHolmes/js-ajax-fetch-lab`;

const resultsEl = document.getElementById('results');
const issuesEl = document.getElementById('issues');

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  fetch( `${gitRepoBase}/${repo}/forks`, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(data => showResults(data));
};

function showResults(json) {
  //use this function to display the results from forking via the API
  resultsEl.innerHTML += `<a href="${json.html_url}">${json.html_url}</a>`;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
  const postData = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value,
  }
  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;

  fetch( `${userUrl}/issues`, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(data => getIssues());

};

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating

  fetch( `${userUrl}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(res => res.json())
  .then(data => console.log(data));
};

// function showIssues(data) {
//   console.log("showing issues:")
//   console.log(data)
//   // issuesEl.innerHTML = ""
//   // data.forEach(issue =>
//   //   issuesEl.innerHTML += `<p></p>`
//   // )
// };


// <input type="text" id="title"><br>
// <input type="text" id="body"><br>
// <a href="#" id="search" onclick="createIssue()">Create Issue</a>
// <div id="issues"></div>
