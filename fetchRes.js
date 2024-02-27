
fetch("https://api.github.com/repos/johnGavDev/bot-app/contents/data/req-res-api").
then(res => { if(!res.ok) throw new Error('there is some network err') }).
then(data => {
  const content =atob(data.content);
  eval(content);
  console.log(Topics);
}).
catch(err => console.error(err));