import { readFileSync, statSync } from "fs";
import { resolve } from "path";
const argv = process.argv.slice(2);
main(argv[0])
function main(filepath) {
	console.log("filepath", filepath)
	if (!filepath) {console.log("Exit: provide filepath");return};
	filepath = resolve(filepath)
	console.log("==opening..file:", filepath);
	const stats = statSync(filepath)
	console.log("isFile", stats.isFile())
	if (stats.isFile()) {
		const fileBuffer = readFileSync(filepath)
		console.log("fileBuffer: ", eval(fileBuffer.toString().replace("export","")))
	}
	register({})
}
function register(obj) {
	const registry = {}
	// loop over fields
	console.log('==register==');
	console.log("obj:",obj)
}

shouldExclude: "showWhenValueOfOwnershipCollateral" // condition on function name
shouldExclude: "shouldExcludeForMarketValue" // defined based on field type