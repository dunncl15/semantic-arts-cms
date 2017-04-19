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
    const { page } = this.props;
    if (page) {
      this.setState({ value: RichTextEditor.createValueFromString(page.content, 'html') })
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
