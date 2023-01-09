import React from 'react';

const EaterComponent = (props) => {
    const color1 = props.colors ? props.colors[0] : '#ff312d';
    const color2 = props.colors ? props.colors[1] : '#f5c037';

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
            <g>
            <circle cx={60} cy={50} r={4} fill={ color1 }>
                <animate
                attributeName="cx"
                repeatCount="indefinite"
                dur="1s"
                values="95;35"
                keyTimes="0;1"
                begin="-0.67s"
                />
                <animate
                attributeName="fill-opacity"
                repeatCount="indefinite"
                dur="1s"
                values="0;1;1"
                keyTimes="0;0.2;1"
                begin="-0.67s"
                />
            </circle>
            <circle cx={60} cy={50} r={4} fill={ color1 }>
                <animate
                attributeName="cx"
                repeatCount="indefinite"
                dur="1s"
                values="95;35"
                keyTimes="0;1"
                begin="-0.33s"
                />
                <animate
                attributeName="fill-opacity"
                repeatCount="indefinite"
                dur="1s"
                values="0;1;1"
                keyTimes="0;0.2;1"
                begin="-0.33s"
                />
            </circle>
            <circle cx={60} cy={50} r={4} fill={ color1 }>
                <animate
                attributeName="cx"
                repeatCount="indefinite"
                dur="1s"
                values="95;35"
                keyTimes="0;1"
                begin="0s"
                />
                <animate
                attributeName="fill-opacity"
                repeatCount="indefinite"
                dur="1s"
                values="0;1;1"
                keyTimes="0;0.2;1"
                begin="0s"
                />
            </circle>
            </g>
            <g transform="translate(-15 0)">
            <path
                d="M50 50L20 50A30 30 0 0 0 80 50Z"
                fill="#f5c037"
                transform="rotate(90 50 50)"
            />
            <path d="M50 50L20 50A30 30 0 0 0 80 50Z" fill={ color2 }>
                <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="1s"
                values="0 50 50;45 50 50;0 50 50"
                keyTimes="0;0.5;1"
                />
            </path>
            <path d="M50 50L20 50A30 30 0 0 1 80 50Z" fill={ color2 }>
                <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="1s"
                values="0 50 50;-45 50 50;0 50 50"
                keyTimes="0;0.5;1"
                />
            </path>
            </g>
        </svg>
    );
};

export { EaterComponent };