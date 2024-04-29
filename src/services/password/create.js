import chalk from "chalk";
import handler from "./handler.js";

async function createPassword() {
    const password = await handler();
    console.log(chalk.green("Senha: " + password));
}

export default createPassword;