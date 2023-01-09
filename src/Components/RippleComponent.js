import React from 'react';

const RippleComponent = (props) => {
    const color1 = props.colors ? props.colors[0] : '#e90c59';
    const color2 = props.colors ? props.colors[1] : '#46dff0';

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
            <circle cx={50} cy={50} r={0} fill="none" stroke={ color1 } strokeWidth={10}>
            <animate
                attributeName="r"
                repeatCount="indefinite"
                dur="1s"
                values="0;40"
                keyTimes="0;1"
                keySplines="0 0.2 0.8 1"
                calcMode="spline"
                begin="0s"
            />
            <animate
                attributeName="opacity"
                repeatCount="indefinite"
                dur="1s"
                values="1;0"
                keyTimes="0;1"
                keySplines="0.2 0 0.8 1"
                calcMode="spline"
                begin="0s"
            />
            </circle>
            <circle cx={50} cy={50} r={0} fill="none" stroke={ color2 } strokeWidth={10}>
            <animate
                attributeName="r"
                repeatCount="indefinite"
                dur="1s"
                values="0;40"
                keyTimes="0;1"
                keySplines="0 0.2 0.8 1"
                calcMode="spline"
                begin="-0.5s"
            />
            <animate
                attributeName="opacity"
                repeatCount="indefinite"
                dur="1s"
                values="1;0"
                keyTimes="0;1"
                keySplines="0.2 0 0.8 1"
                calcMode="spline"
                begin="-0.5s"
            />
            </circle>
        </svg>
    );
};

export { RippleComponent };