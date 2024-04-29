import prompt from 'prompt';
import promptSchemaQRCode from '../../prompts-schema/prompt-schema-qrcode.js';
import handler from './handler.js';

async function createQRCode() {
    prompt.get(promptSchemaQRCode, handler);
}

export default createQRCode;