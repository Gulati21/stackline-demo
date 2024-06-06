import React from 'react'
import { Provider } from 'react-redux'
import RootComponent from './RootComponent'
import { store } from './store/reducers/store'
import { StyledEngineProvider } from '@mui/material'

const App: React.FC = () => {
    return (
        <StyledEngineProvider injectFirst>
            <Provider store={store}>
                <RootComponent />
            </Provider>
        </StyledEngineProvider>
    )
}

export default App
