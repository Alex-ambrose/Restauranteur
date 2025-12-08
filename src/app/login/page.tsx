import { Button, Form, FormControl, FormGroup, FormLabel, FormText } from "react-bootstrap";
export default function login() {
    return (
        <div>
            <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
                <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                    <Form>
                        <FormGroup className="mb-3" controlId="formBasicEmail">
                            <FormLabel>Email address</FormLabel>
                            <FormControl type="email" placeholder="Enter email" />
                            <FormText className="text-muted">
                                We'll never share your email with anyone else
                            </FormText>
                        </FormGroup>

                        <FormGroup className="mb-3" controlId="formBasicPassword">
                            <FormLabel>Password</FormLabel>
                            <FormControl type="password" placeholder="Password" />
                        </FormGroup>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </main>
            </div>
        </div>
    );
}