var React = require('react');
var ListItem = require('./ListItem');

var List = React.createClass({
  getInitialState: function() {
    return {
      isEditing: false
    }
  },
  handleEdit: function(){
    this.setState({
      isEditing: true
    })
  },
  render: function(){
    var listItems = this.props.items.map(function(item, index){
      return(
        // <li key={index} className="list-group-item">
        //   {input}
        // </li>
        <ListItem item={item} remove={index}  />
      );
    }.bind(this));

    return(
      <div>
        <ul className="list-group">
         {listItems}
         
        </ul>
      </div>
    )
  }
});

module.exports = List;