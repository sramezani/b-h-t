import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
// Components
// import { Text } from '@components/';

import { Action } from '../../../lib';

/* Style ========================================== */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: width / 2.2,
        resizeMode: 'contain'
    }
});

interface Props {}
interface State {}

/* Component ====================================== */
class SplashView extends React.Component<Props, State>  {
    constructor(props: Props) {
        super(props);
        this.state = {
          };

    }

    componentDidMount() {
        setTimeout(() => {
            Action.navigate('Home');
        }, 1000);
    }


    render() {
        return (
            <View style={styles.container} testID="Splash">
                <Image source={require('@images/icon.png')} style={styles.logo} />
            </View>
        );
    }
}


/* Export Component =============================== */
export default SplashView;
