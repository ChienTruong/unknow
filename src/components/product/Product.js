import React, { Component } from 'react';
import { Table } from 'reactstrap';

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
    // Simulator
    const products = [
      { id: 1, name: 'Chien', imageUrl: 'chienUrl' },
      { id: 2, name: 'Truong', imageUrl: 'truongUrl' },
    ];
    this.setState({ displayedProducts: products });
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

      const buttons = <td key={ele.id}>
        <a className="btn btn-success" href="#">
          <i className="fa fa-edit"></i>
        </a>
        <a className="btn btn-danger" href="#">
          <i className="fa fa-trash-o"></i>
        </a>
      </td>;

      contents.push(buttons);

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
              <th>Actions</th>
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
