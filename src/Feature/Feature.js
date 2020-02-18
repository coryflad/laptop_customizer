import React from 'react'
import FeatureOption from '../FeatureOption/FeatureOption'
import './Feature.css'

class Feature extends React.Component {
    render() {
        return (
            <div>
                <h3>Feature</h3>
                <FeatureOption />
            </div>

        )
    }
}

export default Feature