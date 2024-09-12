import React from 'react';
import ReactClient from 'react-dom/client';
import './app.css';
import { App } from './app.component';
import { UserProvider } from './reducers/user.context';
import { AuthorProvider } from './reducers/authors';
import { StatusProvider } from './reducers/status.context';
import { Provider } from 'react-redux';
import store from './reducers/store';


const _rootElement = document.getElementById('root');

const root = ReactClient.createRoot(_rootElement!);

root.render(
    <Provider store={store} >
        <StatusProvider>
            <UserProvider>
                <AuthorProvider>
                    <App />
                </AuthorProvider>
            </UserProvider>
        </StatusProvider>
    </Provider>

);

