import React from 'react';
import ZNO from './ZNO/ZNO';

class ZNO_component extends React.Component {
    render() {
        let testsList = this.props.tests;
        return testsList.map(function(test){
            return(
            <ZNO 
                testInfo={test}
            />);
        })
    }
}

export default ZNO_component;