import React, { Component } from 'react';
import '../../resources/css/style.scss';
import Moment from 'react-moment';
import 'moment-timezone';
import banner from '../../resources/images/banner.jpg';
import fiskkitredblacklogo from '../../resources/images/fiskkit-red-black-logo.png';
import img1 from '../../resources/images/img1.png';
import img2 from '../../resources/images/img2.png';
import img3 from '../../resources/images/img3.jpg';
import logo from '../../resources/images/logo.png';
import user from '../../resources/images/user.jpg';
import user1 from '../../resources/images/user1.jpg';
import user2 from '../../resources/images/user2.jpg';


class SampleArticle extends Component {

	constructor(props){
		super(props);
		this.state = ({

		});
	}


	render(){

		let { articleObj } = this.props;

		console.log('12', articleObj);

		return(
			
				<div className="col col-lg-3 col-md-6">
					<div className="card">
						<div className="card-body">
							<div className="card-img">
								<a href="#" className="bg-img" style={{backgroundImage: `url(${articleObj.image_url})`}}></a>
							</div>
							<div className="card-content">
								<h4 className="card-title">
								<a href="#"> {articleObj.title} </a>
								</h4>
								<div className="details">
									<div className="float-left">
										<span>By {articleObj.author} </span>
										<span>{articleObj.publisher}</span>
									</div>
									<div className="float-right">
										<span className="time">{articleObj.read_mins} min read</span>
									</div>
								</div>
								<div className="share-details">
									<div className="float-left">
										<span className="date">{articleObj.created_at}</span>
									</div>
									<div className="float-right">
										<a href="#" className="icon">
											<span className="round-icon">
												<i className="fa fa-pencil"></i>
											</span>
											<span className="count">{articleObj.fisk_count}</span>
										</a>
										<a href="#" className="icon">
											<span className="round-icon">
												<i className="fa fa-share"></i>
											</span>
											<span className="count">{articleObj.share_count}</span>
										</a>
									</div>
									
								</div>
							</div>
						</div>
					</div>
				</div>

		)
	}	
}

export default SampleArticle;



/*{artDataVal != ""  &&  this.props.artDataVal.articles[0].title}*/