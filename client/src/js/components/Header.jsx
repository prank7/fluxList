var React = require('react');

var Header = React.createClass({
  render: function(){
    if (this.props.session.id){
      var name = "Hello " + this.props.session.name;
      var image = this.props.session.image;
    }
    return(
      <navbar>
        <nav><h3>FluxList</h3></nav>
        <div className='nav-right'>
          <span> {name} </span>
          <img src={image} />
          <span><a href="/logout">Logout</a></span>
        </div>
      </navbar>
    )
  }
})

module.exports = Header;