import React from "react";
import { StyleSheet, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Color } from '../../theme';
import { Touchable } from '../Touchable';

/* Styles ====================================== */
const styles = StyleSheet.create({
    container: {
        minWidth: 100,
        height: 45,
        paddingHorizontal: 40,
        // backgroundColor: 'rgb(239,184,12)',
        // background: linear-gradient(90deg, rgba(239,184,12,1) 0%, rgba(251,217,59,1) 100%);
        borderRadius: 50,
        textAlign: 'center',
        justifyContent: 'center'
    },
    gradient: {
        minWidth: 100,
        height: 45,
        borderRadius: 50,
    },
    text: {
        color: '#222'
    }
});

interface Props {
    text: string;
    onPress: () => void,
}
interface State {}

class Button extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { 
            
        };
    }

    render() {
        const { onPress, text } = this.props;
        return (
            <LinearGradient
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                colors={['rgba(239,184,12,1)', 'rgba(251,217,59,1)']}
                style={styles.gradient}
            >
                <Touchable
                    style={styles.container}
                    onPress={onPress}
                >

                    <Text style={styles.text}>
                        {text}
                    </Text>
                </Touchable>
            </LinearGradient>
        );
      }
}

export { Button };