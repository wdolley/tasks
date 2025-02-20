import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <h1> THIS IS A HEADER</h1>
            <p>
                <img
                    src="https://assets.epicurious.com/photos/59bc150e74febd49ca741558/4:3/w_4535,h_3401,c_limit/CINNAMON-CRUMBLE-APPLE-PIE-RECIPE-07092017.jpg"
                    alt="Some random pic I found on the internet"
                />
                Edit <code>src/App.tsx</code> and save. Hello World. This page
                will automatically reload. Will Dolley
            </p>
            <ol>
                <li> 2 </li>
                <li> 1 </li>
                <li> 3 </li>
            </ol>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <span
                            style={{
                                backgroundColor: "red",
                                width: 100,
                                height: 100,
                            }}
                        >
                            STUFF
                        </span>
                    </Col>
                    <Col>
                        <span
                            style={{
                                backgroundColor: "red",
                                width: 100,
                                height: 100,
                            }}
                        >
                            MORE STUFF
                        </span>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
