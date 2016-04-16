var React = require('react')

// Create simple Hello component
var Hello = React.createClass({
  render: function () {
    return <div>Hello, {this.props.name}</div>
  }
})

// `.render(what_to_render, where_to_render)`
React.render(<Hello name="JS 2016!"/>, document.body)
