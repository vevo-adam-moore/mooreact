/* CommentForm */

var React = require('react');

module.exports = React.createClass({
  	displayName: 'CommentForm',
  	handleSubmit: function(e){
  		e.preventDefault();
  		var author = React.findDOMNode(this.refs.author).value.trim();
  		var text = React.findDOMNode(this.refs.text).value.trim();
  		if(!text || !author){
  			return;
  		}
  		this.props.onCommentSubmit({author: author, text: text});
  		// TODO: send request to server
  		React.findDOMNode(this.refs.author).value = '';
  		React.findDOMNode(this.refs.text).value = '';
  		return;
  	},
	render: function(){
		return (
			<div className="commentForm">
				<form className="commentForm" onSubmit={this.handleSubmit} >
			        <input type="text" placeholder="Your name" ref="author" /><br />
			        <input type="text" placeholder="Say something..." ref="text" /><br />
			        <input type="submit" value="Post" />
			    </form>
			</div>
		);
	}
});