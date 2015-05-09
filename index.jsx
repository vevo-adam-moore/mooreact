/** @jsx React.DOM */

'use strict'

var React = require('react');
var CommentBox = require('./CommentBox');

React.render(
	<CommentBox url="comments.json" pollInterval={2000} />, 
	document.getElementById('content')
);
