import React from 'react';
import {RefreshControl, ScrollView} from 'react-native';

export default class extends React.Component {

    state = {
        refreshing: false
    };

    _onRefresh() {

        const onReload = this.props.onReload;

        if (onReload) {
            this.setState({refreshing: true});
            onReload(this.done.bind(this));
        }
    }

    done() {
        this.setState({refreshing: false});
    }

    render() {

        const onEnd = this.props.onEnd;
        const onReload = this.props.onReload;

        let attrs = {}

        if (onEnd) {
            attrs.onScroll = function ({nativeEvent}) {
                if (nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y >= nativeEvent.contentSize.height - 50) {
                    onEnd()
                }
            }
        }

        if (onReload) {
            attrs.refreshControl = (
                <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh.bind(this)}
                />
            );
        }

        return (

            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={0}
                {...attrs}
                {...this.props}>
                {this.props.children}
            </ScrollView>
        );

    }
}
