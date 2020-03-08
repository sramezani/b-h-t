import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

// Components
import { Header, Footer, BoxGray, BoxGreen, BoxLemon, BoxYellow } from "../../../components";

import { StyleDefault } from '../../../theme';

/* Style ========================================== */
const styles = StyleSheet.create({
    header: {
        marginBottom: 15
    },
    topBox: {
        height: 400,
        marginBottom: 15
    },
    middleBox: {
        ...StyleDefault.row,
        height: 200,
        marginBottom: 15
    },
    middleLeft: {
        flex: 1,
        marginRight: 15
    },
    middleRight: {
        flex: 1
    },
    bottomBox: {
        height: 400,
        marginBottom: 15
    },
    footer: {

    }
});

interface Props {}
interface State {}

/* Component ====================================== */
class HomeView extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
        };

    }

    componentDidMount() {
    }


    render() {
        return (
            <ScrollView>
                <View style={styles.header}>
                    <Header />
                </View>
                <View style={styles.topBox}>
                    <BoxLemon />
                </View>
                <View style={styles.middleBox}>
                    <View style={styles.middleLeft}>
                        <BoxGreen />
                    </View>
                    <View style={styles.middleRight}>
                        <BoxGray />
                    </View>
                </View>
                <View style={styles.bottomBox}>
                    <BoxYellow />
                </View>
                <View style={styles.footer}>
                    <Footer />
                </View>
            </ScrollView>
        );
    }
}

/* Export Component =============================== */
export default HomeView;
