import React, { Component } from 'react';
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { actAddProductRequest } from '../../actions/product.action';
import { connect } from 'react-redux';

class ProductAdd extends Component {

  constructor(props) {
    super(props);

    this.state = {
      file: new FormData(),
      product: {
        id: null,
        imageUrl: '',
        code: '',
        name: '',
        price: '',
        quantity: '',
        weightKg: '',
      }
    };

    this.onSave = this.onSave.bind(this);
    // this.onValueChange = this.onValueChange.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
  }

  // onValueChange(event) {
  //   console.log(event);

  //   const fieldName = event.target.getAttribute('name');
  //   const value = event.target.value;
  //   if (this.state[fieldName] !== value) {
  //     this.setState({ [fieldName]: value });
  //   }
  // }

  onImageChange(event) {
    const selectedFile = event.target.files[0];
    if (!selectedFile) {
      return;
    }
    let url = window.URL.createObjectURL(selectedFile);

    const dataChanged = {
      img: selectedFile,
      imgSelectedUrl: url
    };
    this.setState({ ...dataChanged });
  }

  onSave() {
    console.log(this.state);
    this.props.onAddProduct(this.state);
  }

  // handleUploadFile = (event) => {
  //   const data = new FormData();
  //   let file = event.target.files[0];
  //   data.append('file', file);
  //   data.append('product', this.state);
  //   console.log(data);


  // }

  onChange = (e) => {

    //const data = new FormData();
    //let file = event.target.files[0];
    //data.append('file', file);

    //this.props.onAddProduct(data);
    if (e.target.files) {
      var file = e.target.files[0];
      this.setState({
        file: file,
      })
    }
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      product : {
        ...this.state.product,
        [name] : value
      }
      // product[name]: value,
    })
  }

  render() {
    var { id,
      img,
      code,
      name,
      price,
      quantity,
      weightKg, } = this.state;
    const { goBack } = this.props.history;
    const dataRendered = this.state;
    const imgSrc = dataRendered.imgSelectedUrl ? dataRendered.imgSelectedUrl : dataRendered.imageUrl || null;
    return (
      <div>
        <Link to='/product/shirts' className="btn mb-10"><i className="fa fa-undo"></i> Return Page Product</Link>
        <div className="d-flex bd-highlight mb-3">
          <div className="mr-auto p-2 bd-highlight">
            <h2><span className="badge badge-secondary">Create Product</span></h2>
          </div>
          <div className="p-2 bd-highlight">Help</div>
        </div>

        <Form>
          <Col md={6}>
            <FormGroup row>
              <Label sm={2}>Image</Label>
              <Col sm={10}>
                {
                  // imgSrc && <img className="imgInput" src={imgSrc} ref={this.imgRef}></img>
                }

                <Input type="file" name="imageUrl" onChange={this.onChange} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>Code</Label>
              <Col sm={10}>
                <Input type="text" name="code" value={code} onChange={this.onChange} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>Name</Label>
              <Col sm={10}>
                <Input type="text" name="name" value={name} onChange={this.onChange} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>Price</Label>
              <Col sm={10}>
                <Input type="number" name="price" value={price} onChange={this.onChange} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>Quatity</Label>
              <Col sm={10}>
                <Input type="number" name="quantity" value={quantity} onChange={this.onChange} />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>Weight</Label>
              <Col sm={10}>
                <Input type="number" name="weightKg" value={weightKg} onChange={this.onChange} />
              </Col>
            </FormGroup>
          </Col>
          <div className="btn-grp">
            <Button color="primary" onClick={this.onSave}>Save</Button>
            <Button color="danger" onClick={goBack}>Cancel</Button>
          </div>
        </Form>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddProduct: (product) => {
      dispatch(actAddProductRequest(product));
    }
  }
}

export default connect(null, mapDispatchToProps)(ProductAdd);
