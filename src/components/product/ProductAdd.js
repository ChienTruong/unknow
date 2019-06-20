import React, { Component } from 'react';
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap';
import { productService } from '../../services';
export default class ProductAdd extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };

    this.onSave = this.onSave.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
  }

  onValueChange(event) {
    const fieldName = event.target.getAttribute('name');
    const value = event.target.value;
    if (this.state[fieldName] !== value) {
      this.setState({ [fieldName]: value });
    }
  }

  onImageChange(event) {
    const selectedFile = event.target.files[0];
    const reader = new FileReader();
  
    var imgtag = document.getElementById('myimage');
    imgtag.title = selectedFile.name;
  
    reader.onload = function(event) {
      imgtag.src = event.target.result;
    };
  
    reader.readAsDataURL(selectedFile);
  }

  onSave() {
    productService.create({ name: this.state.name });
  }

  render() {
    const { goBack } = this.props.history;
    return (
      <div>
        <Form>
          <Col md={6}>
            <FormGroup row>
              <Label sm={2}>Image</Label>
              <Col sm={10}>
                <img id="myimage"></img>
                <Input type="file" name="img" onChange={this.onImageChange}/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>Code</Label>
              <Col sm={10}>
                <Input type="text" name="code" onChange={this.onValueChange}/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>Name</Label>
              <Col sm={10}>
                <Input type="text" name="name" onChange={this.onValueChange}/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>Price</Label>
              <Col sm={10}>
                <Input type="number" name="price" onChange={this.onValueChange}/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>Quatity</Label>
              <Col sm={10}>
                <Input type="number" name="quatity" onChange={this.onValueChange}/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>Weight</Label>
              <Col sm={10}>
                <Input type="number" name="weight" onChange={this.onValueChange}/>
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
