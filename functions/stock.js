
// const { get, post, put, delete } = 
const getStock = require('./getStock')
const postStock = require('./postStock')
const putStock = require('./putStock')
const deleteStock = require('./deleteStock')

// utils | todo ./util/formattedReturn
const formattedReturn = require('./formattedReturn')

/* tryna be fancy 

		come back to later

	exports.handler = async (event) => {
		// case statement ? https://www.w3schools.com/js/js_switch.asp
		switch ( event.httpMethod ) {
			case 'GET':
				return await getStock(event);
			case 
			default:
				console.log()
		}
	}

*/

exports.handler = async (event) {
	if (event.httpMethod === 'GET') {
		return await getStock(event);
	} else if (event.httpMethod === 'POST') {
		return await postStock(event);
	} else if (event.httpMethod === 'PUT') {
		return await putStock(event);
	} else if (event.httpMethod === 'DELETE') {
		return await deleteStock(event);
	} else {
		return formattedReturn(405, {});

	}
}