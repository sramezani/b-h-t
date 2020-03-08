import React from "react";

import { Nav } from "./Style";

interface Props {}
interface State {}

class Header extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { 
            
        };
    }

    render() {
        return (
            <Nav />
        );
      }
}

export { Header };