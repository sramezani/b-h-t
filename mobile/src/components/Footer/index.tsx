import React from "react";
import { StyleSheet, View } from 'react-native';

import { Button } from '../Button';

import { Color, StyleDefault } from '../../theme';

/* Styles ====================================== */
const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.greenLight,
        flex: 1,
        height: 200,
        ...StyleDefault.align_c
    }
});

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
            <View style={styles.container}>
                <Button
                    text="Click here!"
                    onPress={() => console.warn('Hi Binance :)')}
                />
            </View>
        );
      }
}

export { Footer };