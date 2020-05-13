import React from 'react';

/**
 * Import containers
 */
import BurgerBuilder from 'containers/burger-builder';

/**
 * Import components
 */
import MainLayout from './components/main-layout';

function App() {
    return (
        <MainLayout>
            <BurgerBuilder/>
        </MainLayout>
    )
}

export default App;
