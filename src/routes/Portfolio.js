import React, { Component } from 'react';
import axios from 'axios';
import { Header, Segment, Icon, Menu, Sidebar } from 'semantic-ui-react';
import './Portfolio.css';
import { PostModel, CategoryModel } from '../models/postModels';
import PostsByCategory from '../components/PostsByCategory';

class Portfolio extends Component {
	state = {
		posts: [],
		categories: [],
		activeLink: null
	};

	handleContextRef = contextRef => this.setState({ contextRef });

	async componentDidMount() {
		// FETCH CATEGORIES
		await axios
			.get(
				'http://localhost:8888/react/react-wp/wordpress/wp-json/wp/v2/categories'
			)
			.then(res => {
				const categories = res.data.map(
					category => (category = new CategoryModel(category))
				);
				this.setState({ categories });
			})
			.catch(error => console.log(error));

		// THEN FETCH POSTS
		axios
			.get(
				'http://localhost:8888/react/react-wp/wordpress/wp-json/wp/v2/posts?_embed'
			)
			.then(res => {
				let posts = res.data.map(post => (post = new PostModel(post)));

				// populate categories with tags from posts
				let categories = [...this.state.categories];
				categories.forEach(category => {
					let tags = new Set(); // store in unique set
					posts
						.filter(post => post.category.includes(category.name))
						.forEach(p => {
							p.tags.forEach(v => {
								tags.add(v);
							});
						});
					category.addTags([...tags]);
				});

				this.setState({
					posts: [...posts].sort((a, b) => b.modified - a.modified),
					categories
				});
			})
			.catch(error => console.log(error));
	}

	render() {
		const postsByCategory = this.state.posts.length ? (
			this.state.categories.map(category => {
				let posts = this.state.posts.filter(post =>
					post.category.includes(category.name)
				);

				if (posts.length >= 1) {
					return (
						<PostsByCategory
							category={category}
							posts={posts}
							key={category.name}
						/>
					);
				} else return false;
			})
		) : (
			<p>No posts yet</p>
		);

		return (
			<div className="portfolio">
				
				<div className="content">{postsByCategory}</div>
				<div className="sidebar"></div>
			</div>
		);
	}
}
export default Portfolio;
