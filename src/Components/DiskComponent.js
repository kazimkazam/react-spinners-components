import React from 'react';

const DiskComponent = (props) => {
    const color1 = props.colors ? props.colors[0] : '#4b9bbe';
    const color2 = props.colors ? props.colors[1] : '#eef3ef';

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
            <g transform="translate(50,50)">
            <g transform="scale(0.7)">
                <circle cx={0} cy={0} r={50} fill={ color1 } />
                <circle cx={0} cy={-28} r={15} fill={ color2 }>
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    dur="1s"
                    repeatCount="indefinite"
                    keyTimes="0;1"
                    values="0 0 0;360 0 0"
                />
                </circle>
            </g>
            </g>
        </svg>
    );
};

export { DiskComponent };