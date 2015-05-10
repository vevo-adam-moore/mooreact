/* CcommentBox.jsx */
var React = require('react');
var $ = require('jquery');

var CommentList = require('./CommentList');
var CommentForm = require('./CommentForm');

module.exports = React.createClass({
  	displayName: 'CommentBox',
  	getInitialState: function(){
  		return {data: []};
  	},
  	handleCommentSubmit: function(comment){
  		var comments = this.state.data;
	    var newComments = comments.concat([comment]);
	    this.setState({data: newComments});
  		 $.ajax({
		      url: this.props.url,
		      dataType: 'json',
		      type: 'POST',
		      data: comment,
		      success: function(data) {
		        this.setState({data: data});
		      }.bind(this),
		      error: function(xhr, status, err) {
		        console.error(this.props.url, status, err.toString());
		      }.bind(this)
		  });
  	},
  	loadCommentsFromServer: function(){
  		$.ajax({
	      url: this.props.url,
	      dataType: 'json',
	      cache: false,
	      success: function(data) {
	        this.setState({data: data});
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(this.props.url, status, err.toString());
	      }.bind(this)
	    });
  	},
  	componentDidMount: function() {
	    this.loadCommentsFromServer();
	    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	},
	render: function(){
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.state.data} />
				<CommentForm onCommentSubmit={this.handleCommentSubmit}/>
			</div>
		);
	}
});