var React = require('react');
var userStore = require('../stores/userStore');
var apiUtils = require('../utils/apiUtils');
var userActions = require('../actions/userActions');

require('./home.scss');

var Profile = React.createClass({
  getInitialState: function() {
    return {
      users: userStore.getState()
    }
  },

  componentDidMount: function() {
    userStore.addChangeListener(this._onChange);
    this.getUsers();
  },

  componentWillUnMount: function() {
    userStore.removeChangeListener(this._onChange);
  },

  _onChange: function(){
    this.setState(userStore.getState())
  },

  getUsers: function(){
    var storeState = userStore.getState();
    userActions.getAllUsers();
  },

  render: function(){
    return(
    <div>
      Profile
      <div>hi {this.state} </div>
    </div>
    );
  }
});

module.exports = Profile;