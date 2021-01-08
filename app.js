
document.addEventListener('DOMContentLoaded', () => {
	document.getElementById('getStock').addEventListener('click', getStock);
})

function getStock(event) { console.log('get')
	fetch('/api/getStock')
		// resp sp response
		.then( resp => resp.json() )
		.then( content => document.querySelector('main')
			.innerHTML = `<h2>${content.msg}</h2>`
		)
		.catch( err => console.error )
}