import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class ProductAdd extends Component {
    render() {
        const { goBack } = this.props.history;
        return (
            <div>
                <Button color='danger' onClick={goBack}>Cancel</Button>
            </div>
        );
    }
}
