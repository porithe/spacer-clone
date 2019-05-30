import React from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';
import Results from './components/Results/Results';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const defaultState = {
    results: [],
};

function reducer(state = defaultState, action) {

    switch (action.type) {
        case 'GET RESULTS':
            return {
                results: action.items,
            };
        default: {
            return state;
        }
    }
}

const store = createStore(reducer);

const AppBlock = styled.div`
    height: 100%;
    width: 100%;
`;

const App = () => (
    <Provider store={store}>
        <AppBlock>
            <Header />
            <Results />
        </AppBlock>
    </Provider>
);

export default App;
