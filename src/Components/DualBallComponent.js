import React from 'react';

const DualBallComponent = (props) => {
    const color1 = props.colors ? props.colors[0] : '#e90c59';
    const color2 = props.colors ? props.colors[1] : '#46dff0';
    const color3 = props.colors ? props.colors[2] : '#e90c59';

    const size = props.size ? props.size : '200px';

    return(
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            style={{
            margin: "auto",
            background: "none",
            display: "block",
            shapeRendering: "auto",
            }}
            width={ size }
            height={ size }
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
        >
            <circle cx={30} cy={50} fill={ color1 } r={20}>
            <animate
                attributeName="cx"
                repeatCount="indefinite"
                dur="1s"
                keyTimes="0;0.5;1"
                values="30;70;30"
                begin="-0.5s"
            />
            </circle>
            <circle cx={70} cy={50} fill={ color2 } r={20}>
            <animate
                attributeName="cx"
                repeatCount="indefinite"
                dur="1s"
                keyTimes="0;0.5;1"
                values="30;70;30"
                begin="0s"
            />
            </circle>
            <circle cx={30} cy={50} fill={ color3 } r={20}>
            <animate
                attributeName="cx"
                repeatCount="indefinite"
                dur="1s"
                keyTimes="0;0.5;1"
                values="30;70;30"
                begin="-0.5s"
            />
            <animate
                attributeName="fill-opacity"
                values="0;0;1;1"
                calcMode="discrete"
                keyTimes="0;0.499;0.5;1"
                dur="1s"
                repeatCount="indefinite"
            />
            </circle>
        </svg>
    );
};

export { DualBallComponent };