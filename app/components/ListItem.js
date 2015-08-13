var React = require('react');

var ListItem = React.createClass({

	handleSubmit: function(e){
		if (e.keyCode == 13) {
			var newItem = this.refs.newItem.getDOMNode().value;
			this.refs.newItem.getDOMNode().value = '';
			this.props.add(newItem);
		}
	},
	getInitialState: function() {
    return {
      isEditing: false
    }
  },
  handleEdit: function(e){
    this.setState({
      isEditing: true
    })
    console.log(this.state.isEditing);
    e.target.style.backgroundcolor = "red";
  },

	render: function(){
		return(
			<div>
        <span onDoubleClick={this.handleEdit}>
          {this.props.item}
        </span>
        {this.state.isEditing}
	    </div>
		)
	}
});

module.exports = ListItem;