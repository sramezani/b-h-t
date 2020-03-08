
import React from "react";

import { Container } from "./Style";

interface Props {
    text: string;
    onClick: () => void,
}
interface State {}

class Button extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { 
            
        };
    }

    render() {
        const { onClick, text } = this.props;
        return (
            <Container onClick={onClick}>
                <span>
                    {text}
                </span>
            </Container>
        );
      }
}

export { Button };