
document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('getStock').addEventListener('click', getStock);
})

function getStock(event, context, callback) {
	// event.preventDefault();
	console.log(event)

	callback(null, {
		statusCode: 200,
		body: JSON.stringify( { msg: "wommy working" } )
	})

	/* later

		fetch('https://ron-swanson-quotes.herokuapp.com/v2/:splat')
			// resp sp response
			.then((resp) => resp.json())
			.then( (content) => {
				let main = document.querySelector('main')
				main.innerHTML = `<h2>foo</h2>`
			})
			.catch((err) => console.error)
	
	*/
}