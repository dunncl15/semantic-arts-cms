import React, { Component } from 'react';
import RichTextEditor from 'react-rte';

export default class Editor extends Component {
  constructor() {
    super()
    this.state = {
      value: RichTextEditor.createEmptyValue()
    }
  }

  onChange = (value) => {
    this.setState({value});
    if (this.props.onChange) {
      this.props.onChange(
        value.toString('html')
      );
    }
  }

  render() {
    return (
      <RichTextEditor value={this.state.value}  onChange={this.onChange}/>
    )
  }
}
