import React from 'react';
import { BallComponent } from './Components/BallComponent';
import { BlocksComponent } from './Components/BlocksComponent';
import { CubeComponent } from './Components/CubeComponent';
import { DiscussComponent } from './Components/DiscussComponent';
import { DiskComponent } from './Components/DiskComponent';
import { DualBallComponent } from './Components/DualBallComponent';
import { EaterComponent } from './Components/EaterComponent';
import { GearComponent } from './Components/GearComponent';
import { InfinityComponent } from './Components/InfinityComponent';
import { InterwindComponent } from './Components/InterwindComponent';
import { PulseComponent } from './Components/PulseComponent';
import { RippleComponent } from './Components/RippleComponent';
import { RollingComponent } from './Components/RollingComponent';
import { SpinnerComponent } from './Components/SpinnerComponent';
import { WedgesComponent } from './Components/WedgesComponent';

const LoadingSpinnerComponent = (props) => {
    if (props.type === 'Blocks') {
        return(
            <div>
                <BlocksComponent colors={ props.colors } size={ props.size } />
            </div>
        );
    };

    if (props.type === 'Cube') {
        return(
            <div>
                <CubeComponent colors={ props.colors } size={ props.size } />
            </div>
        );
    };

    if (props.type === 'Discuss') {
        return(
            <div>
                <DiscussComponent color={ props.color } size={ props.size } />
            </div>
        );
    };

    if (props.type === 'Disk') {
        return(
            <div>
                <DiskComponent colors={ props.colors } size={ props.size } />
            </div>
        );
    };

    if (props.type === 'DualBall') {
        return(
            <div>
                <DualBallComponent colors={ props.colors } size={ props.size } />
            </div>
        );
    };

    if (props.type === 'Eater') {
        return(
            <div>
                <EaterComponent colors={ props.colors } size={ props.size } />
            </div>
        );
    };

    if (props.type === 'Gear') {
        return(
            <div>
                <GearComponent color={ props.color } size={ props.size } />
            </div>
        );
    };

    if (props.type === 'Infinity') {
        return(
            <div>
                <InfinityComponent color={ props.color } size={ props.size } />
            </div>
        );
    };

    if (props.type === 'Interwind') {
        return(
            <div>
                <InterwindComponent colors={ props.colors } size={ props.size } />
            </div>
        );
    };

    if (props.type === 'Pulse') {
        return(
            <div>
                <PulseComponent colors={ props.colors } size={ props.size } />
            </div>
        );
    };

    if (props.type === 'Ripple') {
        return(
            <div>
                <RippleComponent colors={ props.colors } size={ props.size } />
            </div>
        );
    };

    if (props.type === 'Rolling') {
        return(
            <div>
                <RollingComponent color={ props.color } size={ props.size } />
            </div>
        );
    };

    if (props.type === 'Spinner') {
        return(
            <div>
                <SpinnerComponent color={ props.color } size={ props.size } />
            </div>
        );
    };

    if (props.type === 'Wedges') {
        return(
            <div>
                <WedgesComponent colors={ props.colors } size={ props.size } />
            </div>
        );
    };

    return(
        <div>
            <BallComponent color={ props.color } size={ props.size } />
        </div>
    );
};

export { LoadingSpinnerComponent };