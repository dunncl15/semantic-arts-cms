import React, { Component } from 'react';
import RichTextEditor from 'react-rte';

export default class Editor extends Component {
  constructor() {
    super()
    this.state = {
      value: RichTextEditor.createEmptyValue()
    }
  }

  componentDidMount() {
    if (this.props.content) {
      this.setState({ value: this.props.content })
    }
  }

  handleChange = (value) => {
    this.setState({value});
    if (this.props.handleChange) {
      this.props.handleChange(
        value.toString('html')
      );
    }
  }

  render() {
    return (
      <RichTextEditor value={this.state.value}
                      onChange={this.handleChange}
      />
    )
  }
}
