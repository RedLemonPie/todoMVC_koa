//废弃
const jwt = require("jsonwebtoken");

const secret = "todolisttodolist";


function createToken(payload) {
	payload.rtiem = new Date();
	payload.exp = 60 * 60 * 24 * 30 * 1000;
	return jwt.sign(payload, secret);
}

function checkToken(token) {
	return new Promise((resolve, reject) => {
		jwt.verify(token, secret, (err, res) => {
			if (!err) {
				resolve(res)
			} else {
				reject(false);
			}
		})
	})
}
module.exports = {
	createToken,
	checkToken
}