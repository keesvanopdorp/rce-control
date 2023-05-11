'use client';
import { Container, Form, Button } from '@components';
import './page.scss';

export default function Add() {
    const sendForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        console.log(formData.get('name'));
    };

    return (
        <Container fluid className="p-2">
            <form onSubmit={sendForm}>
                <Form.Group>
                    <Form.Label> Name: </Form.Label>
                    <Form.Control name="name" type="text" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Cmd: </Form.Label>
                    <Form.Control name="cmd" type="text" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Background color: </Form.Label>
                    <Form.Control name="bg-color" type="color" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Text color: </Form.Label>
                    <Form.Control name="text-color" type="color" />
                </Form.Group>
                <Button type="submit" className="w-100 my-2" variant="success">
                    Submit
                </Button>
            </form>
        </Container>
    );
}
