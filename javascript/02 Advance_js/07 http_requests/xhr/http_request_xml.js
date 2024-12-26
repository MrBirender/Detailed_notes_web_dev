const url = 'https://api.github.com/users/MrBirender';

const xhr = new XMLHttpRequest()

xhr.open('GET', url, true)

xhr.onload = function(){
    if(xhr.status === 200){
        const data  = JSON.parse(xhr.responseText)

        const output = document.getElementById("output");
        output.innerHTML = `
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Username:</strong> ${data.login}</p>
          <p><strong>Public Repos:</strong> ${data.public_repos}</p>
          <p><strong>Followers:</strong> ${data.followers}</p>
          <p><strong>GitHub URL:</strong> <a href="${data.html_url}" target="_blank">${data.html_url}</a></p>
        `;
    }else{
        console.log('Error: ', xhr.statusText)
    }
}

xhr.onerror = function(){
    console.error('request failed')
}

xhr.send()