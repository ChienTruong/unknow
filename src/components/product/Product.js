import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink, Table } from 'reactstrap';

export default class Product extends Component {

  constructor(props) {
    super(props)

    this.state = {
      products: []
    }
  }

  componentDidMount() {
      
  }

  render() {
    return (
      <div>
        <Table responsive striped>
          <thead>
            <tr>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </Table>
        <Pagination>
          <PaginationItem disabled><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
          <PaginationItem active><PaginationLink tag="button">1</PaginationLink></PaginationItem>
          <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
          <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
          <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
          <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
        </Pagination>
      </div>
    )
  }
}
