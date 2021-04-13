const http = new XMLHttpRequest();
http.open("GET", "https://fortniteapi.io/shop?lang=pt-BR");
http.setRequestHeader("Authorization", "YOUR API KEY GOES HERE");
http.setRequestHeader("Authorization", process.env.API_KEY);
http.send();
http.onload = function () {
  const response = JSON.parse(http.responseText);
@@ -9,9 +9,9 @@ http.onload = function () {
  let featuredlist = response.featured;
  let specialFeaturedlist = response.specialFeatured;

  let dailyimage = []; /*daily items image*/
  let featuredimage = []; /*featured items image*/
  let specialFeaturedimage = []; /*special items image*/
  let dailyimage = [];
  let featuredimage = [];
  let specialFeaturedimage = [];

  for (let i = 0; i < dailylist.length; i++) {
    let image = response.daily[i].image;
