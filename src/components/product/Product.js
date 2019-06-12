import React, { Component } from 'react';
import { Table } from 'reactstrap';
import { productService } from '../../services';

const headers = ['Name', 'Image'];

const fields = ['name', 'imageUrl'];
export default class Product extends Component {

  constructor(props) {
    super(props);

    this.state = {
      products: [],
      displayedProducts: [],
    };
  }

  componentDidMount() {
    productService.findAll().then(resp => {
      const products = resp.data;
      this.setState({ products });
    }).catch(err => console.log(err));
  }

  render() {
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
