import React from 'react';

const InterwindComponent = (props) => {
    const color1 = props.colors ? props.colors[0] : '#fe718d';
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
            <g transform="translate(0 -12.5)">
            <circle cx={50} cy={35} r={10} fill={ color1 }>
                <animateTransform
                attributeName="transform"
                type="rotate"
                dur="1s"
                repeatCount="indefinite"
                keyTimes="0;1"
                values="0 50 50;360 50 50"
                />
                <animate
                attributeName="r"
                dur="1s"
                repeatCount="indefinite"
                calcMode="spline"
                keyTimes="0;0.5;1"
                values="0;25;0"
                keySplines="0.2 0 0.8 1;0.2 0 0.8 1"
                />
            </circle>
            <circle cx={50} cy={35} r={10} fill={ color2 }>
                <animateTransform
                attributeName="transform"
                type="rotate"
                dur="1s"
                repeatCount="indefinite"
                keyTimes="0;1"
                values="180 50 50;540 50 50"
                />
                <animate
                attributeName="r"
                dur="1s"
                repeatCount="indefinite"
                calcMode="spline"
                keyTimes="0;0.5;1"
                values="25;0;25"
                keySplines="0.2 0 0.8 1;0.2 0 0.8 1"
                />
            </circle>
            </g>
        </svg>
    );
};

export { InterwindComponent };