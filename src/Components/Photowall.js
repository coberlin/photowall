import React from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';

function PhotoWall(props) {
	return <div className="photoGrid">
		       {props.posts.map((post, index) => <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto}/>)}
				 </div>
}

PhotoWall.propTypes = {
	posts: PropTypes.array.isRequired,
	onRemovePhoto: PropTypes.func.isRequired
}

export { PhotoWall as default };