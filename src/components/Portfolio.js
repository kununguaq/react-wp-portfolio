import React from 'react';
import Masonry from 'react-masonry-css';
import styles from './Portfolio.module.css';
import PostCard from './PostCard';

const Portfolio = props => {
	const breakpointColumnsObj = {
		default: 4,
		1100: 3,
		700: 2,
		500: 1
	};
	const postCards = props.posts.length ? (
		props.posts.map(post => <PostCard post={post} key={post.id} />)
	) : (
		<p>No posts yet</p>
	);

	return (
		<Masonry
			breakpointCols={breakpointColumnsObj}
			className={styles.grid}
			columnClassName={styles.column}
		>
			{postCards}
		</Masonry>
	);
};
export default Portfolio;
