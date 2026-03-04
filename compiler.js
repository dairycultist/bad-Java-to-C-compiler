const fs = require("fs");

const filepaths = process.argv.slice(2);

if (filepaths.length == 0) {
	console.error("Must supply a .java file as a command-line argument.");
	return;
}

try {
	
	console.log(tokenize(fs.readFileSync(filepaths[0], "utf8")));

} catch (err) {
	console.error("Error reading file:", err);
}

function tokenize(string) {

	// remove comments
	string = string.replaceAll(new RegExp("\/\/[^\n]*\n?$", "gm"), "");
	string = string.replaceAll(new RegExp("\/\*.*?\\*\/", "gs"), "");

	// convert all sequences of whitespace-type characters into a single space for convenience
	string = string.replaceAll(/\s+/g, " ");

	// trim
	string = string.trim();

	return [ string ];
}