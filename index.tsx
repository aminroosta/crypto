import * as React from 'react';
import ReactDom from 'react-dom';

import Carousel from './carousel';

// disable pinch zoom on safari
document.addEventListener(
    'gesturestart', (e) => e.preventDefault()
);

ReactDom.render(<Carousel />, document.getElementById('app'));
