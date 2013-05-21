if (document.title.indexOf("оступ к странице ограничен") > -1)
{
	chrome.extension.sendRequest(
	{
		redirect: "http://webcache.googleusercontent.com/search?q=cache%3A" +
		          // http://habrahabr.ru/post/180469/?utm_source=feedly -> http://habrahabr.ru/post/180469/
		          location.href.substring(0, location.href.lastIndexOf("/") + 1) +
		          "&aq=f&sourceid=chrome&ie=UTF-8" });
}
