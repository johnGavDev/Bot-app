
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

async function fetch_db () {
  const t_db = await fetch("https://raw.githubusercontent.com/johnGavDev/bot-app/main/data/db-users.json", {
    headers: {
      "PRIVATE-TOKEN": "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"
    }
  });

  if(!t_db.ok) throw new Error("Net Err");

  var t_db_con_org = JSON.parse(t_db.json());
  console.log(t_db_con_org.messages[0]);
}
