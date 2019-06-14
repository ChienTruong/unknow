import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { productService } from '../../services';
export default class ProductAdd extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
        };

        this.addProduct = this.addProduct.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
    }

    onValueChange(event) {
        const fieldName = event.target.getAttribute('name');
        const value = event.target.value;
        if (this.state[fieldName] !== value) {
            this.setState({ [fieldName]: value });
        }
    }

    addProduct() {
        productService.create({ name: this.state.name });
    }

    render() {
        const { goBack } = this.props.history;
        return (
            <div>
                <Button color='primary' onClick={this.addProduct}>Accept</Button>
                <Button color='danger' onClick={goBack}>Cancel</Button>
                <div>
                    <input type='text' placeholder='Name' name='name' onChange={this.onValueChange}></input>
                </div>
            </div>
        );
    }
}
