import React, { Component } from 'react';

class Category extends Component {
  render() {

    return (
      <React.Fragment>
        {/* <span><a href="https://coreui.io">CoreUI</a> &copy; 2019 creativeLabs.</span> */}
        <span className="ml-auto">Powered by <a href="https://coreui.io/react">Rio</a></span>
      </React.Fragment>
    );
  }
}


export default Category;
