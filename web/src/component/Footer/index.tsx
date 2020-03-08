import React from "react";

import { Button } from '../Button';

import { Container } from "./Style";

interface Props {}
interface State {}

class Footer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { 
            
        };
    }

    render() {
        return (
            <Container>
                <Button
                    text="Click here!"
                    onClick={() => alert('Hi Binance :)')}
                />
            </Container>
        );
      }
}

export { Footer };