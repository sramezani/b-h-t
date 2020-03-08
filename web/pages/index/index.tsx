import React from 'react';

// import { BoxGray } from "@component";

import { BoxGray, BoxGreen, BoxLemon, BoxYellow } from "../../src/component";

import { Container, Left, Middle, Right, LeftTop, LeftBottom } from "./Style";

interface Props {}
interface State {}

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
		super(props);
		this.state = { 
			
		};
  }

  render() {
		return (
			<Container>
				<Left>
					<LeftTop>
						<BoxGreen />
					</LeftTop>
					<LeftBottom>
						<BoxGray />
					</LeftBottom>
				</Left>
				<Middle>
					<BoxLemon />
				</Middle>
				<Right>
					<BoxYellow />
				</Right>
			</Container>
		);
	}
}

export default Home;