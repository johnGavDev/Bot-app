
const btn = document.getElementById('sub-btn');
const inp = document.getElementById('inp');
const usercontainer = document.getElementById('user-container');

fetch('users.json')
    .then(response => response.json())
    .then(data => {

      setInterval(() => {
        usercontainer.textContent = data.users;
      }, 2000)

        btn.addEventListener('click', function() {
          data.users.push({"id": 3, "name": inp.textContent, "email": "someemail"});
        })
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
