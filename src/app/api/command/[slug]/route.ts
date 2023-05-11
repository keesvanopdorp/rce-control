import useAuth from '@libs/hooks/UseAuth';
import Config from '@libs/types/Config';
import { getYamlConfig } from '@libs/utils/yamlUtil';
import { exec } from 'child_process';
import { NextRequest, NextResponse } from 'next/server';

interface RouteProps {
    params: {
        slug: string;
    };
}

export async function GET(req: NextRequest, { params }: RouteProps) {
    const yamlConfig: Config = await getYamlConfig().toJSON();

    useAuth(
        req,
        () => {
            return NextResponse.json({ message: 'Unauthorized', status: 401 }, { status: 401 });
        },
        yamlConfig['auth-key']
    );

    const { slug } = params;

    const command = yamlConfig.commands[slug];
    if (command === undefined) {
        return NextResponse.json({ message: 'Command not found', status: 404 }, { status: 404 });
    }

    exec(command.cmd);
    console.log(`Command executed: ${command.cmd}`);

    return NextResponse.json({ message: 'Command executed', status: 200 }, { status: 200 });
}
