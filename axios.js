function getTodos(){
	// axios({
	// 	method: 'get',
	// 	url: 'https://jsonplaceholder.typicode.com/todos',
	// 	params: {
	// 		_limit: 5
	// 	}
	// }).then(
	// 	res => showOutput( res )
	// ).catch( err => console.error( err ) )
	axios
		.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
		.then(res => showOutput( res ) )
		.catch( err => console.error( err ) )
}

function showOutput(res) {
	document.getElementById('res').innerHTML = `
	<div>
		<h5>status: ${res.status}</h5>
	</div>
	<div>
		<h5>headers<h5>
		<div>
			<pre>${JSON.stringify(res.headers, null, 2)}</pre>
		</div>
	</div>
	<div>
		<h5>data</h5>
		<div>
			<pre>${JSON.stringify(res.data, null, 2)}</pre>
		</div>
	</div>
	<div>
		<h5>config</h5>
		<div>
			<pre>${JSON.stringify(res.config, null, 2)}</pre>
		</div>
	</div>
	`
}

document.getElementById('get').addEventListener('click', getTodos)