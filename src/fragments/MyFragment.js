import React, { Component } from 'react';

class MyFragment extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      this.props.children
    )
  }
}

export default MyFragment;