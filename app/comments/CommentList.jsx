/* CommentList */

var React = require('react');
var Comment = require('./Comment');

module.exports = React.createClass({
  	displayName: 'CommentList',
	render: function(){
		var commentNodes = this.props.data.map(function(comment){
			return (
				<Comment author={comment.author}>
					{comment.text}
				</Comment>
			);
		});
		return (
			<div className="commentList">
				{commentNodes}
			</div>
		);
	}
});