var React = require('react');
var DoBox = require('./DoBox.jsx');
var DontBox = require('./DontBox.jsx');

var TodoBox = React.createClass({
  render: function(){
    return (
      <div className='outer-container'>
        <div className='todo-box'>
          <h4>TodoBox</h4>
          <div className='do-box'>
            <DoBox />
          </div>
          <div className='dont-box'>
            <DontBox />
          </div>
        </div>
      </div>
      )
  }
});

module.exports = TodoBox;