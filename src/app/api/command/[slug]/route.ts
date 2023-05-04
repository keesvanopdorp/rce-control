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
    const { slug } = params;
    const yamlConfig: Config = await getYamlConfig().toJSON();
    const command = yamlConfig.commands[slug];
    if (command === undefined) {
        return NextResponse.json({ message: 'Command not found', status: 404 }, { status: 404 });
    }
    exec(command.cmd);
    return NextResponse.json({ message: 'Command executed', status: 200 }, { status: 200 });
}
