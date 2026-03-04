const fs = require("fs");

const filepaths = process.argv.slice(2);

if (filepaths.length == 0) {
	console.error("Must supply a .java file as a command-line argument.");
	return;
}

try {
	
	console.log(
		tokenize(
			sanitize(
				fs.readFileSync(filepaths[0], "utf8")
			)
		)
	);

} catch (err) {
	console.error("Error reading file:", err);
}

class Op { // Operator generalizes class, function, statement, and expression definitions because I'm crazy

	constructor(type = "NOP", args = []) {
		this.type = type;
		this.args = args;
	}

	print(prefix = "") {

		if (this.args.length != 0) {

			console.log(prefix + "[" + this.type + "]:");

			for (let arg of this.args)
				arg.print(prefix + "  ");

		} else {
			console.log(prefix + this.type);
		}
	}
}

new Op("=", [new Op("x"), new Op("+", [new Op("5"), new Op("10")])]).print();

function sanitize(string) {

	// remove comments
	string = string.replaceAll(new RegExp("\/\/[^\n]*\n?$", "gm"), "");
	string = string.replaceAll(new RegExp("\/\\*.*?\\*\/", "gs"), "");

	// convert all sequences of whitespace-type characters into a single space for convenience
	string = string.replaceAll(/\s+/g, " ");

	// trim
	string = string.trim();

	return string;
}

function tokenize(string) {
	return [ string ];
}