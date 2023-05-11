'use client';
import { Commands } from '@libs/types/Config';
import { Alert, CommandButtonGrid, Container } from '@components';
import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';

interface Response {
    message: string;
    status: number;
}

interface AlertMessage {
    message: string;
    type: 'success' | 'danger';
}

export type ClickHandler = (name: string) => Promise<void>;

export default function Home() {
    const [commands, setCommands] = useState<Commands | undefined>(undefined);
    const [alert, setAlert] = useState<AlertMessage | undefined>(undefined);

    const commandButtonClickHandler = async (name: string) => {
        try {
            const res = await axios.get<Response>(`/api/command/${name}`);
            setAlert({ message: res.data.message, type: 'success' });
        } catch (e) {
            if (e instanceof AxiosError) {
                const axiosError = e as AxiosError<Response>;
                setAlert({
                    message: axiosError.response?.data.message as string,
                    type: 'danger',
                });
            }
        }
        setTimeout(() => {
            setAlert(undefined);
        }, 3000);
    };

    useEffect(() => {
        try {
            axios.get<Commands>('/api/command').then((res) => {
                setCommands(res.data);
            });
        } catch (e) {
            window.alert(e);
        }
    }, []);

    return (
        <Container fluid className="p-2">
            {alert !== undefined && (
                <Alert dismissible onClose={() => setAlert(undefined)} variant={alert.type}>
                    {alert.message}
                </Alert>
            )}
            {commands !== undefined && <CommandButtonGrid clickHandler={commandButtonClickHandler} commands={commands} />}
        </Container>
    );
}
