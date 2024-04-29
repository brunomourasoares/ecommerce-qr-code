import permittedCharacters from './utils/permitted-characters.js';

async function handler() {
    let caracteres = [];
    let password = '';
    
    caracteres = await permittedCharacters();

    for (let i = 0; i < process.env.PASSWORD_LENGTH; i++) {
        password += caracteres[Math.floor(Math.random() * caracteres.length)];
    }

    return password;
}

export default handler;