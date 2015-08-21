var React = require('react');
var AddDoItem = require('./AddDoItem.jsx');
var todoActions = require('../actions/todoActions');
var doStore = require('../stores/doStore');
var DoList = require('./DoList.jsx')

function getState(){
  return{
    dos: doStore.getAllDo()
  }
}

var DoBox = React.createClass({
  getInitialState: function(){
    return getState()
  },

  componentDidMount: function(){
    this.getAllDo();
    doStore.addChangeListener(this._onChange);
  },

  addItem: function(newDo){
    newDo = {name: newDo};
    todoActions.createDo(newDo);
  },

  _onChange: function(){
    this.setState(getState());
  },

  getAllDo: function(){
    console.log("GEtting alll do; in component")
    todoActions.getAllDo();
  },

  render: function(){
    return (
      <div>
        <h3>DoBox</h3>
        <div className='add-new-do'>
          <AddDoItem add={this.addItem} />
        </div>
        <div className='do-list'>
          <DoList dos={this.state.dos} />
        </div>
      </div>
      )
  }
});

module.exports = DoBox;