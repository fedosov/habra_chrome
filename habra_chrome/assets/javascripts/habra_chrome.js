var h1 = document.getElementById('layout').getElementsByTagName('h1')[0];
if (h1.textContent.indexOf("Доступ к публикации закрыт") > -1)
{
	var aTag = document.createElement('a');
	aTag.setAttribute('href',"http://webcache.googleusercontent.com/search?q=cache%3A" +
						// http://habrahabr.ru/post/180469/?utm_source=feedly -> http://habrahabr.ru/post/180469/
						location.href.substring(0, location.href.lastIndexOf("/") + 1) +
						"&aq=f&sourceid=chrome&ie=UTF-8");
	aTag.innerHTML = "Просмотреть в кеше Google";
	h1.appendChild(aTag);
}
