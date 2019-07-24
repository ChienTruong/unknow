import React, { Component } from 'react';
import { connect } from 'react-redux';

export class ProductEdit extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}


const mapStateToProps = state => {
  return {
  
  };
};

const mapDispatchToProps = dispatch => {
  return {
   
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductEdit);
