import React from 'react';

class Hello extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <div>Compiled by Webpack.</div>
    }
}

export default Hello;