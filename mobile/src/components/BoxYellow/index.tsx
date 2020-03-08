import React from "react";
import { StyleSheet, View } from 'react-native';

import { Color } from '../../theme';

/* Styles ====================================== */
const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.yellow,
        width: '100%',
        height: '100%'
    }
});

interface Props {}
interface State {}

class BoxYellow extends React.Component<Props, State> {
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

export { BoxYellow };