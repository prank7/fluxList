var React = require('react');
var userStore = require('../stores/userStore');
var apiUtils = require('../utils/apiUtils');
var userActions = require('../actions/userActions');
var ProfileList = require('./profileList.jsx');
var Header = require('./Header.jsx');

require('./home.scss');

var Profile = React.createClass({
  getInitialState: function() {
    return userStore.getState()
  },
  
  componentDidMount: function(){
    this.getUsers();
    userStore.addChangeListener(this._onChange);
  },

  componentWillUnMount: function() {
    userStore.removeChangeListener(this._onChange);
  },

  _onChange: function(){
    this.setState(userStore.getState())
  },

  getUsers: function(){
    userActions.getAllUsers();
  },

  render: function(){
    return(
    <div>
      <Header />
      <div>
        <ProfileList users={this.state.users} />
      </div>
    </div>
    );
  }
});

module.exports = Profile;