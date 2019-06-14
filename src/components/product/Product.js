import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { productService } from '../../services';

const products = [];

const headers = ['Name', 'Image'];

const fields = ['name', 'imageUrl'];
export default class Product extends Component {

  constructor(props) {
    super(props);

    this.state = {
      products: [],
      displayedProducts: [],
      isAdd: false,
    };
    this.addProduct = this.addProduct.bind(this);
    this.addProductConfirm = this.addProductConfirm.bind(this);
  }

  componentDidMount() {
    productService.findAll().then(resp => {
      const products = resp.data;
      this.setState({ products });
    }).catch(err => this.setState({ products }));
  }

  addProduct() {
    this.setState({ isAdd: true });
  }

  addProductConfirm() {
    this.setState({ isAdd: false });
  }

  render() {
    if (this.state.isAdd) {
      return <Redirect push to={{ pathname: '/product/shirts/add',
        state: {addProductConfirm: this.addProductConfirm} }} />;
    }
    const displayedDatas = this.state.displayedProducts;
    const contentHeader = headers.map(ele => <th key={ele}>{ele}</th>);
    const contentBody = displayedDatas.map(ele => {
      const contents = fields.map(field => {
        return (
          <td key={ele[field]}>{ele[field]}</td>
        );
      });

      return (
        <tr key={ele.id}>
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
