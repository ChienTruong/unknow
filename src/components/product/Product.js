import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { productService } from '../../services';

const headers = ['Name', 'Image'];

const fields = ['name', 'imageUrl'];
export default class Product extends Component {

  constructor(props) {
    super(props);

    this.state = {
      products: [],
      isAdd: false,
    };
    this.addProduct = this.addProduct.bind(this);
  }

  componentDidMount() {
    productService.findAll().then(resp => {
      const products = resp._embedded.products;
      this.setState({ products });
    }).catch(err => console.error(err));
  }

  addProduct() {
    this.setState({ isAdd: true });
  }

  render() {
    if (this.state.isAdd) {
      return <Redirect push to={{ pathname: '/product/shirts/add' }} />;
    }
    const displayedDatas = this.state.products;
    const contentHeader = headers.map(ele => <th key={ele}>{ele}</th>);
    const contentBody = displayedDatas.map(ele => {
      const _self = ele._links.self;
      const contents = fields.map(field => {
        return (
          <td key={`${_self}.${ele[field]}`}>{ele[field]}</td>
        );
      });

      return (
        <tr key={_self}>
          {contents}
        </tr>
      );
    });
    return (
      <div>
        <Button color='primary' onClick={this.addProduct}>Add</Button>
        <Table responsive striped>
          <thead>
            <tr>
              {contentHeader}
            </tr>
          </thead>
          <tbody>
            {contentBody}
          </tbody>
        </Table>
      </div>
    );
  }
}
