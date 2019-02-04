export class PostModel {
	constructor(data) {
		this.id = data.id;
		this.title = data.title.rendered;
		this.content = data.content.rendered;
		this.modified = new Date(data.modified);
		this.featuredMedia = new FeaturedMediaModel(
			data._embedded['wp:featuredmedia'][0]
		);
		this.category = data._embedded['wp:term'][0].map(category => {
			return category.name;
		});
		this.tags = data._embedded['wp:term'][1].map(tag => {
			return tag.name;
		});
	}
}

export class FeaturedMediaModel {
	constructor(data) {
		this.full = data.media_details.file
			? data.media_details.sizes.full.source_url
			: data.source_url;
		this.large = data.media_details.file
			? data.media_details.sizes.large.source_url
			: data.source_url;
		this.medium = data.media_details.file
			? data.media_details.sizes.medium.source_url
			: data.source_url;
		this.medium_large = data.media_details.file
			? data.media_details.sizes.medium_large.source_url
			: data.source_url;
		this.post_thumbnail = data.media_details.file
			? data.media_details.sizes['post-thumbnail'].source_url
			: data.source_url;
		this.thumbnail = data.media_details.file
			? data.media_details.sizes.thumbnail.source_url
			: data.source_url;
	}
}

export class CategoryModel {
	constructor(data){
		this.name = data.name;
		this.description = data.description;
		this.tags = [];
	}

	addTags(data){
		this.tags = data.map(tag => new TagModel(tag));
	}
}

export class TagModel {
	constructor(data){
		this.name = data;
		this.enabled = true;
	}
}

/*
example_output = [
	{
		id: 20,
		date: '2019-01-23T01:27:42',
		date_gmt: '2019-01-23T00:27:42',
		guid: {
			rendered: 'http://localhost:8888/react/react-wp/wordpress/?p=20'
		},
		modified: '2019-01-23T01:27:42',
		modified_gmt: '2019-01-23T00:27:42',
		slug: 'gilles-lambert',
		status: 'publish',
		type: 'post',
		link: 'http://localhost:8888/react/react-wp/wordpress/gilles-lambert/',
		title: {
			rendered: 'Gilles Lambert'
		},
		content: {
			rendered:
				'\n<p>Nulla adipisicing meatball in. Jerky rump dolore veniam cupidatat fatback sunt. Jowl shank boudin chicken. Dolore bresaola ut, pork loin pancetta deserunt swine. Picanha minim reprehenderit occaecat culpa, meatloaf rump incididunt. Frankfurter fatback nulla, et dolore labore meatloaf sed pork corned beef kevin dolore tempor aute. Do kielbasa beef ribs, jowl et swine ut tempor shankle ex cupidatat reprehenderit hamburger qui pig.</p>\n\n\n\n<div class="wp-block-button aligncenter"><a class="wp-block-button__link" href="https://google.com">I&#8217;m a button!</a></div>\n\n\n\n<p>Id consectetur commodo culpa in. Sausage chuck nisi occaecat strip steak officia salami beef ribs tongue burgdoggen pork short ribs irure elit. Meatball eu adipisicing, consectetur pig boudin ribeye in kielbasa spare ribs fatback jerky exercitation sunt. Proident quis aliqua est velit cupidatat aute veniam. Mollit esse cow, tempor pig tenderloin commodo beef ribs laborum excepteur bresaola anim adipisicing sausage jowl.</p>\n\n\n\n<figure class="wp-block-image alignfull"><img src="http://localhost:8888/react/react-wp/wordpress/wp-content/uploads/Seoul-Typography.svg" alt="" class="wp-image-21"/></figure>\n',
			protected: false
		},
		excerpt: {
			rendered:
				'<p>Nulla adipisicing meatball in. Jerky rump dolore veniam cupidatat fatback sunt. Jowl shank boudin chicken. Dolore bresaola ut, pork loin pancetta deserunt swine. Picanha minim reprehenderit occaecat culpa, meatloaf rump incididunt. Frankfurter fatback nulla, et dolore labore meatloaf sed pork corned beef kevin dolore tempor aute. Do kielbasa beef ribs, jowl et swine ut tempor [&hellip;]</p>\n',
			protected: false
		},
		author: 1,
		featured_media: 21,
		comment_status: 'closed',
		ping_status: 'closed',
		sticky: false,
		template: '',
		format: 'standard',
		meta: [],
		categories: [1],
		tags: [7, 4, 8],
		_links: {
			self: [
				{
					href:
						'http://localhost:8888/react/react-wp/wordpress/wp-json/wp/v2/posts/20'
				}
			],
			collection: [
				{
					href:
						'http://localhost:8888/react/react-wp/wordpress/wp-json/wp/v2/posts'
				}
			],
			about: [
				{
					href:
						'http://localhost:8888/react/react-wp/wordpress/wp-json/wp/v2/types/post'
				}
			],
			author: [
				{
					embeddable: true,
					href:
						'http://localhost:8888/react/react-wp/wordpress/wp-json/wp/v2/users/1'
				}
			],
			replies: [
				{
					embeddable: true,
					href:
						'http://localhost:8888/react/react-wp/wordpress/wp-json/wp/v2/comments?post=20'
				}
			],
			'version-history': [
				{
					count: 1,
					href:
						'http://localhost:8888/react/react-wp/wordpress/wp-json/wp/v2/posts/20/revisions'
				}
			],
			'predecessor-version': [
				{
					id: 22,
					href:
						'http://localhost:8888/react/react-wp/wordpress/wp-json/wp/v2/posts/20/revisions/22'
				}
			],
			'wp:featuredmedia': [
				{
					embeddable: true,
					href:
						'http://localhost:8888/react/react-wp/wordpress/wp-json/wp/v2/media/21'
				}
			],
			'wp:attachment': [
				{
					href:
						'http://localhost:8888/react/react-wp/wordpress/wp-json/wp/v2/media?parent=20'
				}
			],
			'wp:term': [
				{
					taxonomy: 'category',
					embeddable: true,
					href:
						'http://localhost:8888/react/react-wp/wordpress/wp-json/wp/v2/categories?post=20'
				},
				{
					taxonomy: 'post_tag',
					embeddable: true,
					href:
						'http://localhost:8888/react/react-wp/wordpress/wp-json/wp/v2/tags?post=20'
				}
			],
			curies: [
				{
					name: 'wp',
					href: 'https://api.w.org/{rel}',
					templated: true
				}
			]
		},
		_embedded: {
			author: [
				{
					id: 1,
					name: 'Colorcoder',
					url: '',
					description: '',
					link:
						'http://localhost:8888/react/react-wp/wordpress/author/colorcoder/',
					slug: 'colorcoder',
					_links: {
						self: [
							{
								href:
									'http://localhost:8888/react/react-wp/wordpress/wp-json/wp/v2/users/1'
							}
						],
						collection: [
							{
								href:
									'http://localhost:8888/react/react-wp/wordpress/wp-json/wp/v2/users'
							}
						]
					}
				}
			],
			'wp:featuredmedia': [
				{
					id: 21,
					date: '2019-01-23T01:26:20',
					slug: 'seoul-typography',
					type: 'attachment',
					link:
						'http://localhost:8888/react/react-wp/wordpress/gilles-lambert/seoul-typography/',
					title: {
						rendered: 'Seoul Typography'
					},
					author: 1,
					caption: {
						rendered: ''
					},
					alt_text: '',
					media_type: 'image',
					mime_type: 'image/svg+xml',
					media_details: {},
					source_url:
						'http://localhost:8888/react/react-wp/wordpress/wp-content/uploads/Seoul-Typography.svg',
					_links: {
						self: [
							{
								href:
									'http://localhost:8888/react/react-wp/wordpress/wp-json/wp/v2/media/21'
							}
						],
						collection: [
							{
								href:
									'http://localhost:8888/react/react-wp/wordpress/wp-json/wp/v2/media'
							}
						],
						about: [
							{
								href:
									'http://localhost:8888/react/react-wp/wordpress/wp-json/wp/v2/types/attachment'
							}
						],
						author: [
							{
								embeddable: true,
								href:
									'http://localhost:8888/react/react-wp/wordpress/wp-json/wp/v2/users/1'
							}
						],
						replies: [
							{
								embeddable: true,
								href:
									'http://localhost:8888/react/react-wp/wordpress/wp-json/wp/v2/comments?post=21'
							}
						]
					}
				}
			],
			'wp:term': [
				[
					{
						id: 1,
						link:
							'http://localhost:8888/react/react-wp/wordpress/category/uncategorized/',
						name: 'Uncategorized',
						slug: 'uncategorized',
						taxonomy: 'category',
						_links: {
							self: [
								{
									href:
										'http://localhost:8888/react/react-wp/wordpress/wp-json/wp/v2/categories/1'
								}
							],
							collection: [
								{
									href:
										'http://localhost:8888/react/react-wp/wordpress/wp-json/wp/v2/categories'
								}
							],
							about: [
								{
									href:
										'http://localhost:8888/react/react-wp/wordpress/wp-json/wp/v2/taxonomies/category'
								}
							],
							'wp:post_type': [
								{
									href:
										'http://localhost:8888/react/react-wp/wordpress/wp-json/wp/v2/posts?categories=1'
								}
							],
							curies: [
								{
									name: 'wp',
									href: 'https://api.w.org/{rel}',
									templated: true
								}
							]
						}
					}
				],
				[
					{
						id: 7,
						link: 'http://localhost:8888/react/react-wp/wordpress/tag/angular/',
						name: 'Angular',
						slug: 'angular',
						taxonomy: 'post_tag',
						_links: {
							self: [
								{
									href:
										'http://localhost:8888/react/react-wp/wordpress/wp-json/wp/v2/tags/7'
								}
							],
							collection: [
								{
									href:
										'http://localhost:8888/react/react-wp/wordpress/wp-json/wp/v2/tags'
								}
							],
							about: [
								{
									href:
										'http://localhost:8888/react/react-wp/wordpress/wp-json/wp/v2/taxonomies/post_tag'
								}
							],
							'wp:post_type': [
								{
									href:
										'http://localhost:8888/react/react-wp/wordpress/wp-json/wp/v2/posts?tags=7'
								}
							],
							curies: [
								{
									name: 'wp',
									href: 'https://api.w.org/{rel}',
									templated: true
								}
							]
						}
					},
					{
						id: 4,
						link:
							'http://localhost:8888/react/react-wp/wordpress/tag/frontend-development/',
						name: 'Frontend development',
						slug: 'frontend-development',
						taxonomy: 'post_tag',
						_links: {
							self: [
								{
									href:
										'http://localhost:8888/react/react-wp/wordpress/wp-json/wp/v2/tags/4'
								}
							],
							collection: [
								{
									href:
										'http://localhost:8888/react/react-wp/wordpress/wp-json/wp/v2/tags'
								}
							],
							about: [
								{
									href:
										'http://localhost:8888/react/react-wp/wordpress/wp-json/wp/v2/taxonomies/post_tag'
								}
							],
							'wp:post_type': [
								{
									href:
										'http://localhost:8888/react/react-wp/wordpress/wp-json/wp/v2/posts?tags=4'
								}
							],
							curies: [
								{
									name: 'wp',
									href: 'https://api.w.org/{rel}',
									templated: true
								}
							]
						}
					},
					{
						id: 8,
						link:
							'http://localhost:8888/react/react-wp/wordpress/tag/typescript/',
						name: 'Typescript',
						slug: 'typescript',
						taxonomy: 'post_tag',
						_links: {
							self: [
								{
									href:
										'http://localhost:8888/react/react-wp/wordpress/wp-json/wp/v2/tags/8'
								}
							],
							collection: [
								{
									href:
										'http://localhost:8888/react/react-wp/wordpress/wp-json/wp/v2/tags'
								}
							],
							about: [
								{
									href:
										'http://localhost:8888/react/react-wp/wordpress/wp-json/wp/v2/taxonomies/post_tag'
								}
							],
							'wp:post_type': [
								{
									href:
										'http://localhost:8888/react/react-wp/wordpress/wp-json/wp/v2/posts?tags=8'
								}
							],
							curies: [
								{
									name: 'wp',
									href: 'https://api.w.org/{rel}',
									templated: true
								}
							]
						}
					}
				]
			]
		}
	}
];*/
