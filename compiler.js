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

	// convert all sequences of whitespace-type characters into a single space for convenience
	string = string.replaceAll(/\s+/g, " ");

	return [ string ];
}