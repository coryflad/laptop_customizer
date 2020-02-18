import React from 'react'
import FeatureList from '../FeaturesList/FeaturesList'
import Cart from '../Cart/Cart'


class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Elf Computing</h1>
                <FeatureList />
                <Cart />
            </div>

        )
    }
}

export default App