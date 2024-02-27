
fetch("https://api.github.com/repos/johnGavDev/bot-app/contents/data/stam.text").
then(res => { if(!res.ok) {
    throw new Error('there is some network err')
  }
    return response.json();
}).
then(data => {
  const content = atob(data.content);
  console.log(content);
}).
catch(err => {console.error("err", err)});
