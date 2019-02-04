import React, { Component } from 'react';
import { Header, Segment, Sticky, Card, Transition } from 'semantic-ui-react';
import './PostsByCategory.css';
import PostCard from './PostCard';

class PostsByCategory extends Component {
	state = {
		contextRef: null,
		sticky: false
	};

	handleContextRef = contextRef => this.setState({ contextRef });
	handleOnUnstick = category => {
		//console.log(`unStick ${category}`);
		this.setState({ sticky: false });
	};
	handleOnstick = category => {
		//console.log(`stick ${category}`);
		this.setState({ sticky: true });
	};


	render() {
		const { contextRef } = this.state;
		const { category, posts } = this.props;
		const sticky = this.state.sticky;

		const postCards = posts.map(post => {
			return <PostCard post={post} key={post.id} />;
		});

		return (
			<div ref={this.handleContextRef}>
				<Segment basic className="segment" id={category.name}>
					<Sticky
						context={contextRef}
						onStick={() => (!sticky ? this.handleOnstick(category.name) : null)}
						onTop={() => (sticky ? this.handleOnUnstick(category.name) : null)}
					>
						<div ref={element => (this.divRef = element)}>
							<Header as="h2">{category.name}</Header>
						</div>
					</Sticky>
					<p className="description">{category.description}</p>
					<Card.Group stackable itemsPerRow={3} className="cardGroup">
						{postCards}
					</Card.Group>
				</Segment>
			</div>
		);
	}
}

export default PostsByCategory;
