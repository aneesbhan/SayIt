fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "quotes15.p.rapidapi.com",
		"x-rapidapi-key": "8640e7b68cmsh5acede15a22716cp1533f9jsn38806d868223"
	}
})
.then(response => response.json())
.then(response => {
	console.log(response);
    console.log(response.content);

    document.getElementById('quote').innerHTML = response.content;
    document.getElementById('author').innerHTML = '- ' + response.originator.name + ' -';
})
.catch(err => {
	console.error(err);
});
