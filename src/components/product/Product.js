import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { productService } from '../../services';

const headers = ['Code', 'Name', 'Image', 'Price'];

const fields = ['code', 'name', 'imageUrl', 'price'];
export default class Product extends Component {

  constructor(props) {
    super(props);

    this.state = {
      products: [],
      isAdd: false,
      isEdit: false,
      idObjEditing: null,
    };
    this.addProduct = this.addProduct.bind(this);
  }

  componentDidMount() {
    productService.findAll().then(resp => {
      const products = resp.data;
      this.setState({ products });
    }).catch(err => console.error(err));
  }

  addProduct() {
    this.setState({ isAdd: true });
  }

  isImage(value) {
    // Temporary implement
    if (typeof value === 'string'
      && value.includes('.png')) {
      return true;
    }
    return false;
  }

  render() {
    if (this.state.isAdd || this.state.isEdit) {
      // Assemble path
      let path = '/product/shirts/add';
      path += this.state.isEdit ? `/${this.state.idObjEditing}` : '';
      // Assemble object to
      const to = { pathname: path };
      // case editing
      return <Redirect push to={to} />;
    }

    const displayedDatas = this.state.products || [];
    const contentHeader = headers.map(ele => <th key={ele}>{ele}</th>);
    const contentBody = displayedDatas.map(ele => {

      const contents = fields.map(field => {
        let value = ele[field];
        if (value && this.isImage(value)) {
          value = <img src={value} className="img-table" alt={value} ></img>;
        }
        return (
          <td key={`${ele.id}.${value}`}>{value}</td>
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
