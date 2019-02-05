import React, { Component } from 'react';
import axios from 'axios';
import { PostModel, CategoryModel } from './models/postModels';
import Portfolio from './components/Portfolio';

class App extends Component {

	state = {
		posts: [],
		categories: []
	};


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
		const posts = this.state.posts;
		return (
			<Portfolio posts={posts}/>
		);
	}
}

export default App;
