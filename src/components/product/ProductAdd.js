import React, { Component } from 'react';
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap';
export default class ProductAdd extends Component {

  constructor(props) {
    super(props);

    this.state = {};

    this.onSave = this.onSave.bind(this);
    this.onBack = this.onBack.bind(this);
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
    if (!selectedFile) {
      return;
    }
    let url = window.URL.createObjectURL(selectedFile);

    const dataChanged = {
      img: selectedFile,
      imgSelectedUrl: url
    };
    this.setState({...dataChanged});
  }

  onSave() {
    this.props.onAccept(this.state);
  }

  onBack() {
    this.props.onBack();
  }

  render() {
    const dataRendered = this.state;
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
                <Input type="file" name="img" onChange={this.onImageChange}/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>Code</Label>
              <Col sm={10}>
                <Input type="text" name="code" value={dataRendered.code || ''} onChange={this.onValueChange}/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>Name</Label>
              <Col sm={10}>
                <Input type="text" name="name" value={dataRendered.name || ''} onChange={this.onValueChange}/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>Price</Label>
              <Col sm={10}>
                <Input type="number" name="price" value={dataRendered.price || ''} onChange={this.onValueChange}/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>Quatity</Label>
              <Col sm={10}>
                <Input type="number" name="quantity" value={dataRendered.quantity || ''} onChange={this.onValueChange}/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label sm={2}>Weight</Label>
              <Col sm={10}>
                <Input type="number" name="weight" value={dataRendered.weight || ''} onChange={this.onValueChange}/>
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
