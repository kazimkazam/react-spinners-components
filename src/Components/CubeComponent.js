import React from 'react';

const CubeComponent = (props) => {
    const color1 = props.colors ? props.colors[0] : '#e15b64';
    const color2 = props.colors ? props.colors[1] : '#f47e60';
    const color3 = props.colors ? props.colors[2] : '#f8b26a';
    const color4 = props.colors ? props.colors[3] : '#abbd81';

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
            <g transform="translate(26.666666666666668,26.666666666666668)">
            <rect x={-20} y={-20} width={40} height={40} fill={ color1 }>
                <animateTransform
                attributeName="transform"
                type="scale"
                repeatCount="indefinite"
                dur="1s"
                keyTimes="0;1"
                values="1.2100000000000002;1"
                begin="-0.3s"
                />
            </rect>
            </g>
            <g transform="translate(73.33333333333333,26.666666666666668)">
            <rect x={-20} y={-20} width={40} height={40} fill={ color2 }>
                <animateTransform
                attributeName="transform"
                type="scale"
                repeatCount="indefinite"
                dur="1s"
                keyTimes="0;1"
                values="1.2100000000000002;1"
                begin="-0.2s"
                />
            </rect>
            </g>
            <g transform="translate(26.666666666666668,73.33333333333333)">
            <rect x={-20} y={-20} width={40} height={40} fill={ color3 }>
                <animateTransform
                attributeName="transform"
                type="scale"
                repeatCount="indefinite"
                dur="1s"
                keyTimes="0;1"
                values="1.2100000000000002;1"
                begin="0s"
                />
            </rect>
            </g>
            <g transform="translate(73.33333333333333,73.33333333333333)">
            <rect x={-20} y={-20} width={40} height={40} fill={ color4 }>
                <animateTransform
                attributeName="transform"
                type="scale"
                repeatCount="indefinite"
                dur="1s"
                keyTimes="0;1"
                values="1.2100000000000002;1"
                begin="-0.1s"
                />
            </rect>
            </g>
        </svg>
    );
};

export { CubeComponent };