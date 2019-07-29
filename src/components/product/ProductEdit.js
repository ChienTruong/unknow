import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import productActions from '../../actions/product.action';
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap';
export class ProductEdit extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.productService.findOne();
  }

  render() {
    const dataRendered = this.props.product;
    const imgSrc = dataRendered.imgSelectedUrl ? dataRendered.imgSelectedUrl : dataRendered.img || null;
    return (
      <div>
        <Form>
          <Col md={6}>
            <FormGroup row>
              <Label sm={2}>Image</Label>
              <Col sm={10}>
                {
                  imgSrc && <img className="imgInput" src={imgSrc} ref={this.imgRef}></img>
                }
                <Input type="file" name="img" onChange={this.onImageChange} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>Code</Label>
              <Col sm={10}>
                <Input type="text" name="code" value={dataRendered.code || ''} onChange={this.onValueChange} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>Name</Label>
              <Col sm={10}>
                <Input type="text" name="name" value={dataRendered.name || ''} onChange={this.onValueChange} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>Price</Label>
              <Col sm={10}>
                <Input type="number" name="price" value={dataRendered.price || ''} onChange={this.onValueChange} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>Quatity</Label>
              <Col sm={10}>
                <Input type="number" name="quantity" value={dataRendered.quantity || ''} onChange={this.onValueChange} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>Weight</Label>
              <Col sm={10}>
                <Input type="number" name="weight" value={dataRendered.weight || ''} onChange={this.onValueChange} />
              </Col>
            </FormGroup>
          </Col>
          <div className="btn-grp">
            <Button color="primary" onClick={this.onSave}>Save</Button>
            <Button color="danger" onClick={this.onBack}>Back</Button>
          </div>
        </Form>
      </div>
    );
  }
}

ProductEdit.defaultProps = {
  product: {},
};

const mapStateToProps = state => {
  return {
    product: state.productReducers.detail,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    productService: bindActionCreators(productActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductEdit);
