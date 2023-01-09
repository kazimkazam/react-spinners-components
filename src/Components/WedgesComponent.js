import React from 'react';

const WedgesComponent = (props) => {
    const color1 = props.colors ? props.colors[0] : '#3be8b0';
    const color2 = props.colors ? props.colors[1] : '#1aafd0';
    const color3 = props.colors ? props.colors[2] : '#6a67ce';
    const color4 = props.colors ? props.colors[3] : '#ffb900';

    const size = props.size ? props.size : '300px';

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
            <g transform="translate(50 50)">
            <g transform="scale(0.66)">
                <g transform="translate(-50 -50)">
                <g>
                    <animateTransform
                    attributeName="transform"
                    type="rotate"
                    repeatCount="indefinite"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                    dur="0.7575757575757576s"
                    />
                    <path
                    fillOpacity={1}
                    fill={ color1 }
                    d="M50 50L50 0A50 50 0 0 1 100 50Z"
                    />
                </g>
                <g>
                    <animateTransform
                    attributeName="transform"
                    type="rotate"
                    repeatCount="indefinite"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                    dur="1.0101010101010102s"
                    />
                    <path
                    fillOpacity={1}
                    fill={ color2 }
                    d="M50 50L50 0A50 50 0 0 1 100 50Z"
                    transform="rotate(90 50 50)"
                    />
                </g>
                <g>
                    <animateTransform
                    attributeName="transform"
                    type="rotate"
                    repeatCount="indefinite"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                    dur="1.5151515151515151s"
                    />
                    <path
                    fillOpacity={1}
                    fill={ color3 }
                    d="M50 50L50 0A50 50 0 0 1 100 50Z"
                    transform="rotate(180 50 50)"
                    />
                </g>
                <g>
                    <animateTransform
                    attributeName="transform"
                    type="rotate"
                    repeatCount="indefinite"
                    values="0 50 50;360 50 50"
                    keyTimes="0;1"
                    dur="3.0303030303030303s"
                    />
                    <path
                    fillOpacity={1}
                    fill={ color4 }
                    d="M50 50L50 0A50 50 0 0 1 100 50Z"
                    transform="rotate(270 50 50)"
                    />
                </g>
                </g>
            </g>
            </g>
        </svg>
    );
};

export { WedgesComponent };