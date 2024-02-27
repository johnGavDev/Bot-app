
fetch(`https://api.github.com/repos/johnGavDev/bot-app/contents/bot-api/api_01.text`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Decode Base64 content (GitHub API returns content as Base64 encoded)
        const content = atob(data.content);
        console.log(content);
    })
    .catch(error => {
        console.error('Error:', error);
    });