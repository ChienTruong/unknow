import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import productActions from '../../actions/product.action';
import { Redirect } from 'react-router-dom';

const headers = ['Image', 'Name', 'Catology', 'Status', 'Date Create'];

const fields = ['code', 'name', 'imageUrl', 'price'];
class Product extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isAdd: false,
      isEdit: false,
      idObjEditing: null,
    };
    this.addProduct = this.addProduct.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

  componentDidMount() {
    this.props.productService.findAll();
  }

  addProduct() {
    this.setState({ isAdd: true, isEdit: false });
  }

  onDelete(id) {
    this.props.productService.delete(id);
  }

  onEdit(id) {
    this.setState({
      isAdd: false,
      isEdit: true,
      idObjEditing: id,
    });
    // this.props.productService.findOne(id);
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
      // const onAccept = this.state.isEdit ? 
      //   this.props.productService.update : this.props.productService.create;
      const pathName = this.state.isAdd ? '/product/create' : `/product/${this.state.idObjEditing}`;
      const to = {
        pathname: pathName,
        state: {

        }
      };
      return <Redirect to={to} />;
    }

    const displayedDatas = this.props.products || [];
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
          <td>
            <Button color='success' onClick={() => this.onEdit(ele.id)}>Edit</Button>
            <Button color='danger' onClick={() => this.onDelete(ele.id)}>Delete</Button>
          </td>
        </tr>
      );
    });
    return (
      <div className="container">
        <div className="row margin-top-10">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Button color='primary' onClick={this.addProduct}>Add</Button>
          </div>
        </div>
        <div className="row margin-top-10">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
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
        </div>
      </div>
    );
  }
}

Product.defaultProps = {
  products: [],
};

const mapStateToProps = state => {
  return {
    products: state.productReducers.data,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    productService: bindActionCreators(productActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);