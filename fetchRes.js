
fetch("https://api.github.com/repos/johnGavDev/bot-app/contents/data/stam.text").
then(res => { if(!res.ok) {
    throw new Error('there is some network err')
  }
    return res.json();
}).
then(data => {
  const content = atob(data.content);
  console.log(content + " and the topic is: " + Topics);
}).
catch(err => {console.error("err", err)});
