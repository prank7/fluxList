var React = require('react');

var AddDoItem = React.createClass({
  handleSubmit: function(e){
    if(e.keyCode == 13){
      var newDo = this.refs.newDo.getDOMNode().value;
      this.refs.newDo.getDOMNode().value = '';
      this.props.add(newDo);
    }
  },

  render: function(){
    return (
        <input className='do-input' ref='newDo' onKeyDown={this.handleSubmit} />
      )
  }
});

module.exports = AddDoItem;