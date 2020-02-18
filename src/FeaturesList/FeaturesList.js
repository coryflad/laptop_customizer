import React from 'react'
import Feature from '../Feature/Feature'
import './FeaturesList.css'

class FeaturesList extends React.Component {
    render() {
        return (
            <div>
                <h2>Feature List</h2>
                <Feature />
            </div>

        )
    }
}

export default FeaturesList