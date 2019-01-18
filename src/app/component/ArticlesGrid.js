import React, { Component } from 'react';
import Repeat from 'react-repeat-component';
import SampleArticle from './SampleArticle.js';
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
			v: 1,
		});
	}


	render() {

		const { v } = this.state;

		let { artData } = this.props;
		console.log('11111', artData );
		// if (artData != "" ) {
		//  	for ( let i = 0; i < artData.articles.length; i++ ) {
		//   	//	console.log(artData.articles[i].title);		
		//  	}
		// }

			//console.log(this.props.artData);	
		
			return(
							<div className="article-section">
								
								<div className="row">

								{artData != "" &&
								artData.articles.map((articleObj, artticleIndex) => 
									<SampleArticle articleObj = {articleObj} />
									)
								}
									
								</div>
							

								<div className="pagination">
									<a href="#"  className="disabled prev">
										<i className="fa fa-angle-left"></i>
									</a>
									<ul>
										<li className="current">
											<a href='#'>1</a>
										</li>
										<li>
											<a href='#'>2</a>
										</li>
										<li>
											<a href='#'>3</a>
										</li>
										<li>
											<a href='#'>4</a>
										</li>
										<li>
											<a href='#'>...</a>
										</li>
										<li>
											<a href='#'>30</a>
										</li>
									</ul>
									<a href="#" className="next">
										<i className="fa fa-angle-right"></i>
									</a>
								</div>
							</div>

		)
	}
}

export default ArticlesGrid;