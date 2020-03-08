
import * as React from "react";

import { Header } from '../Header';
import { Footer } from '../Footer';

interface Props {
    children: JSX.Element
}
interface State {}

class Layout extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { 
            
        };
    }

    render() {
        return (
            <>
                <Header />
            
                {this.props.children}
            
                < Footer/>
            </>
        );
      }
}

export { Layout };