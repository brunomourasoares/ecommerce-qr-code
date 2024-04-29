async function permittedCharacters() {
    let permitted = [];

    if (process.env.UPPERCASE === 'true') permitted.push(...'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    if (process.env.LOWERCASE === 'true') permitted.push(...'abcdefghijklmnopqrstuvwxyz');
    if (process.env.NUMBERS === 'true') permitted.push(...'0123456789');
    if (process.env.SPECIAL_CHARACTERS === 'true') permitted.push(...'!@#$%^&*()-_');
    
    return permitted;
}

export default permittedCharacters;