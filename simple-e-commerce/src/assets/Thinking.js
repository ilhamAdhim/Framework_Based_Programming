import { MDBRow } from 'mdbreact';
import React from 'react';
import { ReactComponent as ThinkingLogo } from './thinking.svg';

const Thinking = () => {

    const textStyle = {
        marginTop: '2.5em', textAlign: 'center', color: '#a9b0ab', fontWeight: 'bold', marginBottom: '2em'
    }

    return (
        <div className="text-center mt-4">
            <MDBRow>
                <ThinkingLogo style={{ height: '20em' }} />
            </MDBRow>
            <h4 style={textStyle}> Welcome to GokilShop !</h4>
        </div >
    );
};


export default Thinking;