var React = require('react');

var List = React.createClass({
	render: function(){

		var listItems = this.props.items.map(function(item, index){
			return(
				<li key={index} className="list-group-item">
          <span>
            {item}
          </span>
        </li>
			);
		});

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