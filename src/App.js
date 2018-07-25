import React, { Component } from 'react';
import './App.css';
import Help from './toolkit/Help';

class App extends Component {
    constructor(props) {
        super(props);

        console.log("%c1U2D time to CLOWN", "color: #f00;font-size: 10em; font-weight: bold; text-shadow: .03em .02em #000;");
    };

    render() {
        const helpAll = [
            'Button',
            'Dropdown',
            'FancyDropdown',
            'Loading',
            'RadioGroup',
            'TextArea',
            'Tiles',
            'L10N'
        ];

        return helpAll.map((item, k) => (
            <Help key={k} component={item} />
        ));
    };

}

export default App;