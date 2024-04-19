
const btn = document.getElementById('sub-btn');
const inp = document.getElementById('inp');
const usercontainer = document.getElementById('user-container');

// fetch('https://api.github.com/repos/johnGavDev/bot-app/contents/data/user-db.json')
//     .then(response => {
//       if(!response.ok) throw new Error('there is network error');
//       response.json();
//     })
//     .then(data => {

//       console.log(data.users);

//       setInterval(() => {
//         usercontainer.textContent = data.users;
//       }, 2000)

//       btn.addEventListener('click', function() {
//         var newUser = { id: 3, name: inp.textContent, email: "someemail"}
//         data.users.push(newUser);
//       })

//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//     });

fetch_db();

let apiUrl = "https://raw.githubusercontent.com/johnGavDev/bot-app/main/data/db-users.json"



async function fetch_db () {
  const t_db = await fetch("https://raw.githubusercontent.com/johnGavDev/bot-app/main/data/db-users.json", {
    headers: {
      "PRIVATE-TOKEN": "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",
      'Content-Type': 'application/json'
    }
  });

  if(!t_db.ok) throw new Error("Net Err");

  var t_db_con_org = JSON.parse(t_db.json());
  console.log(t_db_con_org);
}
