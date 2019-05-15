function getRepos(input) {
    fetch(`https://api.github.com/users/${input}/repos`)
    .then(response => response.json())
    .then(responseJson => displayUserRepos(responseJson));
}

function displayUserRepos(responseJson) {
    for (let i=0; i<responseJson.length; i++) {
        $('.results-container').append(`<h4>${responseJson[i].name}</h4><a href="${responseJson[i].html_url}" target="_blank">Link To Repo</a><hr>`);
    }
}

function retrieveInput() {
    $('form').submit(event => {
      event.preventDefault();
      $('.results-container').empty();
      let name = $('#user-name').val();
      getRepos(name);
    });
}

$(function(){
   retrieveInput();
})