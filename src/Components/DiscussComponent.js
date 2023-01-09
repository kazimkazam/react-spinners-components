import React from 'react';

const DiscussComponent = (props) => {
    const color = props.color ? props.color : '#2aa7c9';
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
            <path
            d="M89.2 50A39.2 39.2 0 1 1 17.578441488437164 27.966331588196493 L15.351767721859161 15.351767721859176 L27.966331588196468 17.578441488437186 A39.2 39.2 0 0 1 89.2 50"
            strokeWidth={4}
            stroke={ color }
            fill="none"
            />
            <circle
            cx={50}
            cy={50}
            r={24.5}
            strokeWidth={4}
            stroke={ color }
            strokeDasharray="38.48451000647496 38.48451000647496"
            fill="none"
            strokeLinecap="round"
            >
            <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="1s"
                keyTimes="0;1"
                values="0 50 50;360 50 50"
            />
            </circle>
        </svg>
    );
};

export { DiscussComponent };