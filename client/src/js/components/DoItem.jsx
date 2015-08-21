var React = require('react');
var todoActions = require('../actions/todoActions');

var DoItem = React.createClass({

  handleDelete: function(){
    console.log("action", this.props);
    todoActions.deleteDoItem(this.props.itemKey)
  },

  render: function(){
    return (
      <div className='do' >
        <li>
          <span className='pull-left'> {this.props.name}</span> 
          <span className='pull-right' onClick={this.handleDelete} ></span>
        </li>
      </div>
    )
  }
})

module.exports = DoItem;