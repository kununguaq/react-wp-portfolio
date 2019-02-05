import React from 'react';
import { Markup } from 'interweave';
import styles from './PostCard.module.css';

const PostCard = props => {
	const w = props.post.featuredMedia.sizes.width;
	const h = props.post.featuredMedia.sizes.height;
	const height = (h > w) ? '200%' : '100%';

	const style = {
		backgroundImage: `url(${props.post.featuredMedia.medium})`,
		paddingBottom: height
	};

	const options = { year: 'numeric', month: 'long', day: 'numeric' };

	return (
		<div className={styles.wrapper}>
			<div className={styles.image} style={style} />
			<div className='content'>
				<div className='header'>
					<Markup content={props.post.title} />
				</div>
				<div className='meta'>
					{props.post.modified.toLocaleDateString('en-US', options)}
				</div>
			</div>
		</div>
	);
};

export default PostCard;
