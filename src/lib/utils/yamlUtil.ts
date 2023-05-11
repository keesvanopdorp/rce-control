import { readFileSync } from 'fs';
import path from 'path';
import { parseDocument, Document } from 'yaml';

export function getYamlConfig(): Document.Parsed {
    const file = readFileSync(path.join(process.cwd(), 'config.yaml'), 'utf8');
    return parseDocument(file);
}

export function getAuthKey(): string {
    const { 'auth-key': authKey } = getYamlConfig().toJSON();
    return authKey;
}
