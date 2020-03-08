import React from "react";
import { StyleSheet, View } from 'react-native';

import { Color } from '../../theme';

/* Styles ====================================== */
const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.olive,
        flex: 1,
        height: 60
    }
});

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
            <View style={styles.container} />
        );
      }
}

export { Header };