import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SampleArticle from './SampleArticle.js';
import Pagination from './Pagination.js';
import '../../resources/css/style.scss';
import banner from '../../resources/images/banner.jpg';
import fiskkitredblacklogo from '../../resources/images/fiskkit-red-black-logo.png';
import img1 from '../../resources/images/img1.png';
import img2 from '../../resources/images/img2.png';
import img3 from '../../resources/images/img3.jpg';
import logo from '../../resources/images/logo.png';
import user from '../../resources/images/user.jpg';
import user1 from '../../resources/images/user1.jpg';
import user2 from '../../resources/images/user2.jpg';




class ArticlesGrid extends Component {

	constructor(props){
		super(props);
		this.state = ({
			page: '1',
		})
	}

	updatePage(e, pageNum){
		e.preventDefault();
		this.setState({
			page: pageNum
		});	
	}


	render() {
		const { page } = this.state;
 		let { artData, getArticles, sortBy } = this.props;
		// console.log('11111', artData );
		// if (artData != "" ) {
		//  	for ( let i = 0; i < artData.articles.length; i++ ) {
		//   	//	console.log(artData.articles[i].title);		
		//  	}
		// }
		// console.log('artData',  artData);
		// console.log('artData.articles',  artData.articles); 
		
			return(
							<div className="article-section">
								
								<div className="row" >

								{Object.keys(artData).length !== 0 &&
								artData.articles.map((articleObj, artticleIndex) => 
									<SampleArticle articleObj = {articleObj} key={articleObj.id} />
									) 
								}
								
								</div>
							</div>

		)
	}
}


ArticlesGrid.propTypes = {
	getArticles: PropTypes.func,
	artData: PropTypes.object,
	
};

export default ArticlesGrid;

// (`https://api.fiskkit.com/api/v1/articles?display_respected_comments=0&limit=10&offset=10&sort=created`)



	// <a href="#"  className="disabled prev">
									// 	<i className="fa fa-angle-left"></i>
									// </a>
									

									// <ul>
									// 	<li className={`${page === '1' ? 'current' : ''}`}>
									// 		<a href='#' onClick={(e)=> {
									// 		this.updatePage(e, '1'); 
									// 		 } 
									// 		}>1</a>
									// 	</li>
									// 	<li className={`${page === '2' ? 'current' : ''}`}>
									// 		<a href='#' onClick={(e) => {this.updatePage(e, '2'); this.props.getArticles(`https://api.fiskkit.com/api/v1/articles?display_respected_comments=0&limit=9&offset=9&sort=created`)} }>2</a>
									// 	</li>
									// 	<li className={`${page === '3' ? 'current' : ''}`}>
									// 		<a href='#' onClick={e => this.updatePage(e, '3')}>3</a>
									// 	</li>
									// 	<li className={`${page === '4' ? 'current' : ''}`}>
									// 		<a href='#' onClick={e => this.updatePage(e, '4')}>4</a>
									// 	</li>
									// 	<li>
									// 		<a href='#'>...</a>
									// 	</li>
									// 	<li className={`${page === '283' ? 'current' : ''}`}>
									// 		<a href='#' onClick={e => this.updatePage(e, '30')}>30</a>
									// 	</li>
									// </ul>
									// <a href="#" className="next">
									// 	<i className="fa fa-angle-right"></i>
									// </a>
