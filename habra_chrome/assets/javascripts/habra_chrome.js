var h1 = document.getElementById('layout').getElementsByTagName('h1')[0];
if (h1.textContent.indexOf("Доступ к публикации закрыт") > -1)
{
	// http://habrahabr.ru/post/180469/?utm_source=feedly -> http://habrahabr.ru/post/180469/
	var strippedUrl = location.href.substring(0, location.href.lastIndexOf("/") + 1);
	h1.appendChild(document.createElement('br'));
	var google = document.createElement('a');
	google.setAttribute('href',"http://webcache.googleusercontent.com/search?q=cache%3A" +					
						strippedUrl +
						"&aq=f&sourceid=chrome&ie=UTF-8");
	google.innerHTML = "Просмотреть в кеше Google";
	h1.appendChild(google);
	h1.appendChild(document.createElement('br'));
	var soHabr = document.createElement('a');
	var split = strippedUrl.split("/");
	var postId = split[split.length - 2]; // Last element is ""
	soHabr.setAttribute('href',"https://sohabr.net/habr/post/" + postId);
	soHabr.innerHTML = "Просмотреть на SoHabr";
	h1.appendChild(soHabr);
}
