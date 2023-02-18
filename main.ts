import Parser from "./frontend/parser";
import { createGlobalEnv } from "./runtime/environments";
import { evaluate } from "./runtime/interpreter";

run("./test.txt");

async function run(filename: string) {
	const parser = new Parser();
	const env = createGlobalEnv();

	const input = await Deno.readTextFile(filename);
	const program = parser.produceAST(input);

	const result = evaluate(program, env);
	// console.log(result);
}