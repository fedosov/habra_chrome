if (document.title.indexOf("оступ к странице ограничен") > -1)
{
	chrome.extension.sendRequest({ redirect: "http://webcache.googleusercontent.com/search?q=cache%3A" + window.location.href + "&aq=f&sourceid=chrome&ie=UTF-8" });
}
