import React from 'react';

/**
 * Import containers
 */
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

/**
 * Import components
 */
import MainLayout from './components/MainLayout/MainLayout';

function App() {
    return (
        <MainLayout>
            <BurgerBuilder/>
        </MainLayout>
    )
}

export default App;
