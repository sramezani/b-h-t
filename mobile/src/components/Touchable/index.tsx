import React from 'react';
import { TouchableOpacity } from 'react-native';


interface Props {
    onPress: () => void,
    disabled: boolean,
    children: JSX.Element,
    activeOpacity: number,
    style: object
}
interface State {}

/* Component =========================================== */
class Touchable extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this._onPress = this._onPress.bind(this);
    }

    static defaultProps = {
        style: {},
        onPress: () => {},
        disabled: false,
        children: null,
        activeOpacity: 0.8
    }

    _onPress() {
        this.props.onPress();
    }


    render() {
        const { activeOpacity, children, disabled, style, ...restProps } = this.props;

        return (
            <TouchableOpacity
                {...restProps}
                style={style}
                disabled={disabled}
                activeOpacity={0.9}
                onPress={this._onPress}
            >
                {children}
            </TouchableOpacity>
        );
    }
}

/* Export Component ========================================= */
export { Touchable };
