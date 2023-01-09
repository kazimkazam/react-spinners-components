import React from 'react';

const PulseComponent = (props) => {
    const color1 = props.colors ? props.colors[0] : '#e15b64';
    const color2 = props.colors ? props.colors[1] : '#f8b26a';
    const color3 = props.colors ? props.colors[2] : '#abbd81';

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
            <rect x={17.5} y={30} width={15} height={40} fill={ color1 }>
            <animate
                attributeName="y"
                repeatCount="indefinite"
                dur="1s"
                calcMode="spline"
                keyTimes="0;0.5;1"
                values="10;30;30"
                keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
                begin="-0.2s"
            />
            <animate
                attributeName="height"
                repeatCount="indefinite"
                dur="1s"
                calcMode="spline"
                keyTimes="0;0.5;1"
                values="80;40;40"
                keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
                begin="-0.2s"
            />
            </rect>
            <rect x={42.5} y={30} width={15} height={40} fill={ color2 }>
            <animate
                attributeName="y"
                repeatCount="indefinite"
                dur="1s"
                calcMode="spline"
                keyTimes="0;0.5;1"
                values="15;30;30"
                keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
                begin="-0.1s"
            />
            <animate
                attributeName="height"
                repeatCount="indefinite"
                dur="1s"
                calcMode="spline"
                keyTimes="0;0.5;1"
                values="70;40;40"
                keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
                begin="-0.1s"
            />
            </rect>
            <rect x={67.5} y={30} width={15} height={40} fill={ color3 }>
            <animate
                attributeName="y"
                repeatCount="indefinite"
                dur="1s"
                calcMode="spline"
                keyTimes="0;0.5;1"
                values="15;30;30"
                keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
            />
            <animate
                attributeName="height"
                repeatCount="indefinite"
                dur="1s"
                calcMode="spline"
                keyTimes="0;0.5;1"
                values="70;40;40"
                keySplines="0 0.5 0.5 1;0 0.5 0.5 1"
            />
            </rect>
        </svg>
    );
};

export { PulseComponent };