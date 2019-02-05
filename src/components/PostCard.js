import React, { Component } from 'react';
import { Markup } from 'interweave';
import posed from 'react-pose';
import styles from './PostCard.module.css';

const Back = posed.div({
	idle: {
		opacity: 0
	},
	hover: {
		opacity: 1
	}
});
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
const options = { year: 'numeric', month: 'long', day: 'numeric' };

class PostCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pose: 'idle'
		};
		this.w = this.props.post.featuredMedia.sizes.width;
		this.h = this.props.post.featuredMedia.sizes.height;
		this.height = this.h > this.w ? '200%' : '100%';
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
