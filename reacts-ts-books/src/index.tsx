import React from 'react';
import ReactClient from 'react-dom/client';
import './app.css';
import {App} from './app.component';
import { UserProvider } from './contexts/user.context';
import { AuthorProvider } from './contexts/author.context';


const _rootElement =document.getElementById('root');

const root = ReactClient.createRoot(_rootElement!);

root.render(
    <UserProvider>
        <AuthorProvider>
            <App/>
        </AuthorProvider>
    </UserProvider>

);

