var React = require("react");
require('./home.scss');

var Home = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="home">
          <h1>FluxList</h1>
        </div>
        <div className="home-description">
          <h1>A To-do list for my needs</h1>
          <a href="/auth/google"><button>Login with Google</button></a>
        </div>
      </div>
    );
  }

});

module.exports = Home;