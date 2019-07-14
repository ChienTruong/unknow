import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { actFetchProducts, actFetchDeleteProduct } from '../../actions/product.action';
import { Link } from 'react-router-dom';

const headers = ['Code', 'Name', 'Image', 'Price', 'Status', 'Date Create', 'Action'];

const fields = ['code', 'name', 'imageUrl', 'price', 'status', 'createdDate'];
class Product extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isAdd: false,
      isEdit: false,
      idObjEditing: null,
    };
    this.addProduct = this.addProduct.bind(this);
  }

  componentDidMount() {
    // this.props.productService.findAll();
    this.props.fetchAllProducts();
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

  onDelete = (id) => {
    if (window.confirm('Are you sure ?')) {
      this.props.fetchDeleteProduct(id);
    }
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

    const displayedDatas = this.props.productAll || [];
    const contentHeader = headers.map((ele, index) => <th key={index}>{ele}</th>);
    const contentBody = displayedDatas.map((ele, index) => {
      const contents = fields.map(field => {
        let value = ele[field];
        if (value && this.isImage(value)) {
          value = <img src={value} className="img-table" alt={value} ></img>;
        }
        return (
          <td key={index++}>{value}</td>
        );
      });

      return (
        <tr key={index}>
          {contents}
          <td>
            <button type="button" className="btn btn-success">Edit</button>
            <button type="button" className="btn btn-danger" onClick={() => this.onDelete(ele.id)}>Remove</button>
          </td>
        </tr>
      );
    });
    return (

      <div className="container">

        <div className="d-flex bd-highlight mb-3">
          <div className="mr-auto p-2 bd-highlight">
            <h2><span className="badge badge-secondary">Product</span></h2>

          </div>
          <div className="p-2 bd-highlight">
            <Link to='/product/shirts/add' className="btn btn-info mb-10">Create Product</Link>
          </div>
          <div className="p-2 bd-highlight">Help</div>
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
    productAll: state.productAll
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // productService: bindActionCreators(productActions, dispatch),
    fetchAllProducts: () => {
      dispatch(actFetchProducts());
    },
    fetchDeleteProduct: (id) => {
      dispatch(actFetchDeleteProduct(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
