class Token {

	constructor(type = "", value = "") {
		this.type = type;
		this.value = value;
	}
}

module.exports = { tokenize: tokenize };

function tokenize(string) {

	let tokens = [];

	while (string.length != 0) {

		let match;

		if (match = string.match(/^public|private|protected|default/)) {

			tokens.push(new Token("access modifier", match[0]));

		} else {

			string = "";
		}

		if (match)
			string = string.substring(match[0].length).trim();
	}

	return tokens;
}