import React from 'react';

const RollingComponent = (props) => {
    const color = props.color ? props.color : '#0a69aa';
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
            <circle
            cx={50}
            cy={50}
            fill="none"
            stroke={ color }
            strokeWidth={10}
            r={35}
            strokeDasharray="164.93361431346415 56.97787143782138"
            >
            <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="1s"
                values="0 50 50;360 50 50"
                keyTimes="0;1"
            />
            </circle>
        </svg>
    );
};

export { RollingComponent };