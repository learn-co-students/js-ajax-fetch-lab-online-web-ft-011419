const token = "0d5fa1a58e5aba0d65d62bb14220cf5997be11c6"


function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';

}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: "POST",
    headers: {
      Authorization: `token ${token}`
    }
  })
    .then(res => res.json())
    .then(json => showResults(json))
}

function showResults(json) {
  document.getElementById("results").innerHTML = `<a href=${json.html_url}> ${json.html_url}</a>`
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html

  const postData = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value
  }

  
  fetch(`https://api.github.com/repos/Kang0/js-ajax-fetch-lab/issues`, {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${token}`
    }
  })
    .then( res => console.log(res))
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
  fetch(`https://api.github.com/repos/Kang0/js-ajax-fetch-lab/issues`, {
    method: "GET",
    headers: {
      Authorization: `token ${token}`
    }
  })
    .then(res => res.json())
    .then(res => displayIssues(res))
}

