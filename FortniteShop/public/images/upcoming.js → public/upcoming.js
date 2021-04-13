const http = new XMLHttpRequest();
http.open("GET", "https://fortniteapi.io/items/upcoming?lang=pt-BR");
http.setRequestHeader("Authorization", "YOUR API KEY GOES HERE");
http.setRequestHeader("Authorization", process.env.API_KEY);
http.send();
http.onload = function () {
  const response = JSON.parse(http.responseText);

  let upcominglist = response.items;
  let upcomingimage = []; /*daily items image*/
  let upcomingimage = [];

  for (let i = 0; i < upcominglist.length; i++) {
    let image = upcominglist[i].images.full_background;
