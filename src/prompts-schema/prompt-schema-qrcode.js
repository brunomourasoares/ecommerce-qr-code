import chalk from 'chalk';

const promptSchemaQRCode = [
    {
        name: "link",
        description: chalk.yellow("Digite o link para gerar o QR code:"),
    },
    {
        name: "type",
        description: chalk.yellow("Escolha o tipo do QR code (1- Imagem ou 2- Terminal)"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Opção inválida, escolha (1- Imagem ou 2- Terminal)"),
        required: true
    }
];

export default promptSchemaQRCode;