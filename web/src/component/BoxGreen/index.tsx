
import React from "react";

import { Container } from "./Style";

interface Props {}
interface State {}

class BoxGreen extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { 
            
        };
    }

    render() {
        return (
            <Container />
        );
      }
}

export { BoxGreen };