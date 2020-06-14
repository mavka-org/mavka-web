import React from 'react';
import ZNO from './ZNO/ZNO';

class ZNO_component extends React.Component {
    render() {
        let testsList = this.props.tests;
        return (
            <div>
                {
                    testsList.forEach(element => {
                        <ZNO />
                    })
                }
            </div>
        );
    }
}

export default ZNO_component;