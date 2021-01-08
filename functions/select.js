exports.handler = function (event, context, callback){
	//event - express request obj
	console.log(event)

	callback( null, {
		status: 200,
		body: JSON.stringify('wommy')
	})
}