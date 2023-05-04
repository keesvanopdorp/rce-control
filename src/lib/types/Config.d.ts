export interface Command {
    name: string;
    cmd: string;
    'background-color': string;
    'text-color': string;
}

export type Commands = { [key: string]: Command };

export default interface Config {
    'auth-key': string;
    commands: Commands;
}
