window.addEventListener('DOMContentLoaded', (event) => {
    fetch('https://api.github.com/users/pavezi/repos')
        .then(response => response.json())
        .then(data => {
            const projectsList = document.getElementById('projects-list');
            data.forEach(repo => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = repo.html_url;
                link.innerText = repo.name;
                listItem.appendChild(link);
                projectsList.appendChild(listItem);
            });
        });
});
