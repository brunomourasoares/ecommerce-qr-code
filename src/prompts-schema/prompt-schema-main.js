import chalk from 'chalk';

const promptSchemaMain = [{
        name: "select",
        description: chalk.yellow.bold("Escolha a ferramenta (1- QR Code ou 2- Senha Aleatória)"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Opção inválida, escolha (1- QR Code ou 2- Senha Aleatória)"),
        required: true
}];

export default promptSchemaMain;