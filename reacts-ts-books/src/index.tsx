import React from 'react';
import ReactClient from 'react-dom/client';

import {App} from './app.component';


const _rootElement =document.getElementById('root');

const root = ReactClient.createRoot(_rootElement!);

root.render(<App/>);

