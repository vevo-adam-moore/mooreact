/** @jsx React.DOM */

'use strict'

var React = require('react');
var CommentBox = require('./app/comments/CommentBox');

React.render(
	<CommentBox url="data/comments.json" pollInterval={2000} />, 
	document.getElementById('content')
);
