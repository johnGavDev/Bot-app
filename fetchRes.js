
const btn = document.getElementById('sub-btn');
const inp = document.getElementById('inp');
const usercontainer = document.getElementById('user-container');

fetch('https://api.github.com/repos/johnGavDev/bot-app/contents/data/user-db.json')
    .then(response => {
      if(!response.ok) throw new Error('there is network error');
      response.json();
    })
    .then(data => {

      console.log(data.users);

      setInterval(() => {
        usercontainer.textContent = data.users;
      }, 2000)

      btn.addEventListener('click', function() {
        var newUser = { id: 3, name: inp.textContent, email: "someemail"}
        data.users.push(newUser);
      })

    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
