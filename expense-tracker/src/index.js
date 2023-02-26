import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { SpeechProvider } from '@speechly/react-client';

import App from './App';
import { Provider } from './Context/context';

ReactDOM.render(
        <SpeechProvider appId="afae2234-46f2-49d2-bd08-0ee52bf818c8" language="en-US">
            <Provider>
                <App />
            </Provider> 
        </SpeechProvider>


, document.getElementById('root'));