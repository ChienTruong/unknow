import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import productActions from '../../actions/product.action';
import ProductAdd from './ProductAdd';

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
    this.onBack = this.onBack.bind(this);
  }

  componentDidMount() {
    this.props.productService.findAll();
  }

  addProduct() {
    this.setState({ isAdd: true });
  }

  onBack() {
    this.setState({ isAdd: false });
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
      const onAccept = this.props.productService.create;
      return <ProductAdd onAccept={onAccept} onBack={this.onBack} />;
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