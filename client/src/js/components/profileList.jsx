var React = require('react');

var ProfileList = React.createClass({
  render: function(){
    var profiles = this.props.users.map(function(user){
      console.log(user);
      return (<li key={user.id}>{user.name}, {user.email} <img src={user.image} /></li>
        );
    });
    return (
      <div className="profile" >
        {profiles}
      </div>
    )
  }
})

module.exports = ProfileList;