var React = require('react');
var userStore = require('../stores/userStore');
var authStore = require('../stores/authStore');
var userActions = require('../actions/userActions');
var authActions = require('../actions/authActions');
var ProfileList = require('./profileList.jsx');
var TodoBox = require('./TodoBox.jsx');
var Header = require('./Header.jsx');

require('./home.scss');

function getState(){
  return {
    users: userStore.getState(),
    session: authStore.getSession()
  }
}

var Profile = React.createClass({
  getInitialState: function() {
    return getState()
  },
  
  componentDidMount: function(){
    this.getUsers();
    this.getSession();
    userStore.addChangeListener(this._onChange);
    authStore.addChangeListener(this._onChange);
  },

  componentWillUnMount: function() {
    userStore.removeChangeListener(this._onChange);
  },

  _onChange: function(){
    this.setState(getState());
  },

  getUsers: function(){
    userActions.getAllUsers();
  },

  getSession: function(){
    authActions.getSession();
  },

  render: function(){
    console.log(JSON.stringify(this.state));
    return(
    <div>
      <Header session={this.state.session} />
      <div>
        <TodoBox />
      </div>
    </div>
    );
  }
});

module.exports = Profile;