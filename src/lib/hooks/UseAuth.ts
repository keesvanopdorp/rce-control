import { NextRequest } from 'next/server';

export default function useAuth(req: NextRequest, unAuthenticated: () => any, configAuthKey: string): void {
    const authKey = req.headers.get('authorization');

    if (authKey === null) {
        unAuthenticated();
        return;
    }

    if (authKey !== configAuthKey) {
        unAuthenticated();
        return;
    }
}
