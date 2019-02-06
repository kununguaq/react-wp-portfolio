import React, { Component } from 'react';
import { Markup } from 'interweave';
import posed from 'react-pose';
import styles from './PostCard.module.css';

// Back poses
const Back = posed.div({
	idle: {
		opacity: 0
	},
	hover: {
		opacity: 1
	}
});

// Content poses
const Content = posed.div({
	idle: {
		scale: 1,
		opacity: 0,
		y: '0%'
	},
	hover: {
		opacity: 1,
		y: '-50%'
	},
	press: {
		scale: 0.8
	}
});

// Date format
const options = { year: 'numeric', month: 'long', day: 'numeric' };

class PostCard extends Component {
	constructor(props) {
		super(props);
		// Store pose in state
		this.state = {
			pose: 'idle'
		};
		// Determine image height
		this.w = this.props.post.featuredMedia.sizes.width;
		this.h = this.props.post.featuredMedia.sizes.height;
		this.height = this.h > this.w ? '160%' : '80%';
		this.image = {
			backgroundImage: `url(${this.props.post.featuredMedia.medium})`,
			paddingBottom: this.height
		};
	}

	handlePress = e => {
		this.setState({ pose: 'press' });
		setTimeout(() => {
			this.setState({ pose: 'idle' });
		}, 100);
	};

	render() {
		return (
			<div
				className={styles.wrapper}
				onClick={this.handlePress}
				onMouseEnter={() => this.setState({ pose: 'hover' })}
				onMouseLeave={() => this.setState({ pose: 'idle' })}
			>
				<div className={styles.image} style={this.image} />
				<Back className={styles.back} pose={this.state.pose} />
				<Content className={styles.content} pose={this.state.pose}>
					<h3 className={styles.header}>
						<Markup content={this.props.post.title} />
					</h3>
					<p className={styles.meta}>
						{this.props.post.modified.toLocaleDateString('en-US', options)}
					</p>
				</Content>
			</div>
		);
	}
}

export default PostCard;
