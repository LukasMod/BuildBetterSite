import React from 'react';
import ReactDOM from 'react-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faAt, faCode, faBuilding, faEnvelopeSquare, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'

import App from './App'

library.add(faAt, fab, faCode, faBuilding, faEnvelopeSquare, faPhoneSquareAlt)
const rootElement = document.getElementById('root');

if (rootElement) [ReactDOM.render(<App />, rootElement)];