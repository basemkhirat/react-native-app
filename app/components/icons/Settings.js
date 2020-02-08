import React from 'react';
import {Circle, Path, Svg} from 'react-native-svg'

export default props => {

    let st0 = {
        fill: "#FFFFFF",
        stroke: props.color,
    }

    let st1 = {
        fill: "none",
        stroke: props.color,
        strokeWidth: 7,
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
    }

    return (
        <Svg version="1.1"
             width="60" height="60"
             x="0px" y="0px"
             viewBox="0 0 198.4 198.4" style="enable-background:new 0 0 198.4 198.4;">

            <Path {...st0} d="M55.5,173.7c-9.1,0-12.6-3.6-12.6-10.5c0-2.1,0.4-4.1,1.2-6l3.5-0.6c-0.9,1.9-1.3,4.1-1.4,6.2
	c0,5.5,2.2,8.3,9.7,8.3H62v-14.3h3.3v16.9H55.5z M50.5,151.5c-0.1-1.1,0.7-2,1.8-2c1.1-0.1,2,0.7,2,1.8c0,0.1,0,0.2,0,0.3
	c0,1.1-0.8,1.9-1.9,1.9c0,0,0,0,0,0C51.4,153.4,50.6,152.5,50.5,151.5C50.6,151.5,50.6,151.5,50.5,151.5L50.5,151.5z M55.8,151.5
	c0-1.1,0.9-1.9,1.9-1.9c1,0,1.9,0.8,1.9,1.8c0,0,0,0,0,0.1c0.1,1.1-0.7,2-1.8,2c-1.1,0.1-2-0.7-2-1.8
	C55.8,151.7,55.8,151.6,55.8,151.5z"/>
            <Path {...st0} d="M71.9,148.3h3.3v25.4h-3.3V148.3z"/>
            <Path {...st0}
                  d="M80.5,171H92c-0.1-6.6-2.7-10.3-9.1-12.2l0.8-2.8c7.8,2.4,11.5,6.8,11.5,15.8v1.8H80.5V171z"/>
            <Path {...st0} d="M101,148.3h3.3v25.4H101V148.3z"/>
            <Path {...st0}
                  d="M109.6,171h11.6c-0.1-6.6-2.7-10.3-9.1-12.2l0.8-2.8c7.6,2.3,11.3,6.6,11.5,15h2.8v2.6h-17.6V171z"/>
            <Path {...st0} d="M126.7,171h7c-2.4-1.2-3.9-3.7-3.9-6.4c0-4.5,2.9-8.3,8.9-8.3c1.6,0,3.2,0.3,4.7,0.8l-0.6,2.7
	c-1.4-0.6-2.8-0.8-4.3-0.9c-3.2,0-5.4,2.1-5.4,5.6c0,3.7,2.8,6.5,9.6,6.5h3v2.6h-18.9V171z"/>
            <Path {...st0} d="M147.7,180.8c0.7,0,1.4,0,2.1,0.1c-0.4-0.3-0.7-0.8-0.6-1.3c0-1.8,1.4-3.2,4.2-3.2c0.7,0,1.3,0,2,0.2l-0.3,2
	c-0.6-0.1-1.1-0.2-1.7-0.2c-1.1,0-1.7,0.5-1.7,1.2s0.7,1.3,2.4,1.3h2.1v2h-8.4L147.7,180.8z M150.8,148.3h3.3v25.4h-3.3V148.3z"/>
            <Path {...st1}
                  d="M70.4,95.7c0-20.9,12.7-37.8,28.4-37.8s28.4,17,28.4,37.8C127.1,106.1,70.4,106.1,70.4,95.7z"/>
            <Circle {...st1} cx="97.8" cy="38" r="18.6"/>
        </Svg>
    );
}


