var React = require('react');

var List = React.createClass({
  getInitialState: function() {
    return {
      isEditing: false
    };
  },
  handleEdit: function(){
    
  },
  render: function(){
    var listItems = this.props.items.map(function(item, index){
      return(
        <li key={index} className="list-group-item">
          <span onDoubleClick={this.handleEdit}>
            {item}
          </span>
          <span className="pull-right glyphicon glyphicon-remove" onClick={this.props.remove.bind(null, index)}>
          </span>
        </li>
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