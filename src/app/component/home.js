import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetch from 'universal-fetch'
import Header from './header.js';
import Pagination from './Pagination.js';
import ArticlesGrid from './ArticlesGrid.js';
import '../../resources/css/style.scss';
//import './font-awesome.min.css';
import banner from '../../resources/images/banner.jpg';
import fiskkitredblacklogo from '../../resources/images/fiskkit-red-black-logo.png';
import img1 from '../../resources/images/img1.png';
import img2 from '../../resources/images/img2.png';
import img3 from '../../resources/images/img3.jpg';
import logo from '../../resources/images/logo.png';
import user from '../../resources/images/user.jpg';
import user1 from '../../resources/images/user1.jpg';
import user2 from '../../resources/images/user2.jpg';



class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			sortBy: "created",
			sidebarOpen: true ,
			artData: {},	
			// articlesIndex: [],
		};
		//this.repeat = this.repeat.bind(this);
	}

	componentDidMount() {
		this.getArticles(`https://api.fiskkit.com/api/v1/articles?display_respected_comments=0&limit=9&offset=0&sort=created`);
	}	

	componentDidUpdate(prevProps, prevState){

		//console.log("previousstate", prevState.sortBy, "this State", this.state.sortBy);

		if (this.state.sortBy === 'mostFisked' && prevState.sortBy === 'created') {
			this.getArticles(`https://api.fiskkit.com/api/v1/articles?display_respected_comments=0&limit=9&offset=0&sort=fisk_count`);	
			this.refs.paginationReference.currentPageChange();
		}
		else if (this.state.sortBy === 'created' && prevState.sortBy === 'mostFisked') {
			this.getArticles(`https://api.fiskkit.com/api/v1/articles?display_respected_comments=0&limit=9&offset=0&sort=created`);	
			this.refs.paginationReference.currentPageChange();
		}
	}

	updateSort(e , sortType){
		e.preventDefault();
		this.setState({
			sortBy: sortType
		});	
	}	


	getArticles(requestUrl) {
		fetch(requestUrl)
		.then(response => response.json() )
		.then(json => this.setState({artData: json}) )
		.catch(err => console.log('Articles error' + err ));
	}


	toggleSidebar(e) {
		e.preventDefault();
		this.setState({
			sidebarOpen: !this.state.sidebarOpen
		})
	} 
	
	render() {
		const {sortBy, sidebarOpen, artData } = this.state;
		let { currentPageChange } = this.props;
		
		const testVar = 'test string';
		// console.log('currentPage', this.props.currentPage);
		// if (this.state.artData != "") {
		// 	for (let i = 0; i < this.state.artData.articles.length; i++) {
		// 	console.log(artData.articles);
		// 	}
		// }
		
		//console.log("render this.state: ", this.state);
		//debugger;
		return (


						
			<div className={` ${sidebarOpen ? 'page-wrapper' : 'page-wrapper open'} ` }>
				
				<div >
					<Header toggleSidebar = { e => this.toggleSidebar(e)} />
					<div>
					<div className="banner">
						<div className="banner-img" style={{backgroundImage: `url(${banner})`}} >
							<div className="banner-content text-center">
								<h3 className="banner-title">A platform for civil, fact-based, and engaging discussions</h3>
								<button className="btn">Sign Up</button>
							</div>
						</div>
					</div>
					<div className="site-content">
						<div className="contanier contanier-md">
							<div className="tagline-section text-center">
								<img src={fiskkitredblacklogo} />
								<p className="tagline">A better way to discuss the news</p>
							</div>
							<div className="sorting-tabs">
								<ul>
									<li className={`${sortBy === 'created' ? 'active' : ''}`}>
										<a href="#" className="tab" onClick={e => this.updateSort(e, 'created')}>Most Recent</a>
									</li>
									<li className={`${sortBy === 'mostFisked' ? 'active' : ''}`}>
										<a href="#" className="tab" onClick={e => this.updateSort(e, 'mostFisked')}>Most Fisked</a>
									</li>
								</ul>
							</div>
							<div>
								{/*artData != "" &&
								artData.articles.map(a => a.title) 
								
								*/}
							</div>
							
							<ArticlesGrid artData={this.state.artData}  getArticles={this.getArticles.bind(this)} sortBy={this.state.sortBy}/>
								<div className="pagination">	
									{Object.keys(artData).length !== 0 &&
										<Pagination ref="paginationReference"

												totalRecords={this.state.artData.meta.count} 
												pageLimit={9} 
												pageNeighbours={1} 
												getArticles={this.getArticles.bind(this)} 
												sortBy={this.state.sortBy}
										/> 
									}
								</div>	
								<div>
								</div>

						</div>
					</div>
					</div>
				</div>
			</div>
		)
	}

}

// Home.propTypes = {
// 	sortBy: PropTypes.string,
// 	artData: PropTypes.object,
// 	sidebarOpen: propTypes.bool,
// 	currentPageChange: PropTypes.func,
// };


export default Home;