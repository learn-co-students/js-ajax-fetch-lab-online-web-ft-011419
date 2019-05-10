let user;
user = `https://api.github.com/Luiszaba`;


function getToken() {

  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: "POST",
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showResults(json));
}

function showResults(json) {

  document.getElementById('results').innerHTML=`<a href=${json.html_url}>${json.html_url}</a>`;
}

function createIssue() {

  const postData = {
    title: document.getElementById("title").value,
    body: document.getElementById("body").value
  };
  fetch(`https://github.com/Luiszaba/js-ajax-fetch-lab/issues`, {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`,
    }
  })
    .then(res => res.json())
      .then(res => res.console.log(res))
}

function getIssues() {

  fetch('https://github.com/repos/Luiszaba/js-ajax-fetch-lab/issues',{
    headers: {

      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(res => res.console.log(res))
}
