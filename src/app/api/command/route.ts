import Config from '@libs/types/Config';
import { getYamlConfig } from '@libs/utils/yamlUtil';
import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json(((await getYamlConfig().toJSON()) as Config).commands);
}
