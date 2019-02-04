import React from 'react';
import { Card } from 'semantic-ui-react';
import { Markup } from 'interweave';
import './PostCard.css';

const PostCard = props => {
	const style = {
		backgroundImage: `url(${props.post.featuredMedia.medium})`
    };
    
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

	return (
		<Card fluid>
			<div className='featuredImage' style={style} />
			<Card.Content>
				<Card.Header>
					<Markup content={props.post.title} />
				</Card.Header>
				<Card.Meta>{props.post.modified.toLocaleDateString("en-US", options)}</Card.Meta>
			</Card.Content>
		</Card>
	);
};

export default PostCard;
