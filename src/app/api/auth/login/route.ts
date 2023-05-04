import Config from '@libs/types/Config';
import { getYamlConfig } from '@libs/utils/yamlUtil';
import { NextRequest, NextResponse } from 'next/server';
import z from 'zod';

export async function POST(req: NextRequest) {
    try {
        const json = await req.json();
        const { 'auth-key': authKey }: Config = await getYamlConfig().toJSON();
        const authSchema = z.object({
            'auth-key': z.string(),
        });
        const { 'auth-key': userAuthKey } = authSchema.parse(json);
        if (authKey !== userAuthKey) {
            return NextResponse.json({ message: 'Auth key does not match', status: 401 }, { status: 401 });
        }

        return NextResponse.json({ message: 'Login success', status: 200 }, { status: 200 });
    } catch (e) {
        if (e instanceof z.ZodError) {
            return NextResponse.json({ message: 'Auth key not valid', status: 401 }, { status: 401 });
        }
    }
}
