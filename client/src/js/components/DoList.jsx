var React = require('react');
var DoItem = require('./DoItem.jsx');

var DoList = React.createClass({
  render: function(){
    return (
      <div className="all-do" >
        {this.props.dos.map(function(unit){
          return (
            <DoItem name={unit.name} itemKey={unit.id} />
          );
        })}
      </div>
    )
  }
})

module.exports = DoList;