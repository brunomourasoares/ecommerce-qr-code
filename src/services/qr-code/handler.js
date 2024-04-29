import qr from "qrcode-terminal";
import chalk from "chalk";

async function handler (err, result) {
    if (err) {
        console.log("Erro na aplicação!");
        return;
    }
    const isSmall = result.type == 2;
    qr.generate(result.link, { small: isSmall }, (qrcode)=> {
        console.log(chalk.green("QR Code gerado: "));
        console.log(qrcode);
    });
}

export default handler;