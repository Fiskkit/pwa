import React, { useState, useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import fetch from 'universal-fetch';

// Local imports
import FiskBlock from './card';
import Pagination from '../pagination';
import articlesSkeleton from './grid-skeleton';
import { requestRecentArticles, requestMostFiskedArticles } from '../../utils/api';


function articleReducer(state: { articles: IArticle [] }, action: { type: string, payload: IArticle []}) {
  switch (action.type) {
    case 'update':
      return { articles: action.payload };
    default:
      // A reducer must always return a valid state.
      // Alternatively you can throw an error if an invalid action is dispatched.
      return state;
  }
}


export default (props: {
  loadedData: {
    articles: IArticle []
  }
} = {
  loadedData: { 
    articles: []
  }
}) => {

  const [articleState, articleDispatch] = useReducer(
    articleReducer,
    { articles: props.loadedData.articles }
  );

  const [ loadingArticles, setLoadingArticles ] = useState(false);
  const [ tab, setTab ] = useState('most-recent');
  const [ currentPage, setCurrentPage ] = useState(10);

  const loadRecentArticles = async (page: number = 1) => {
    console.log("load recent artciles");
    const recentArticles = await requestRecentArticles(page, 12);
    articleDispatch({type: 'update', payload: recentArticles})
  };

  const loadMostFiskedArticles = async (page: number = 1) => {
    console.log("load most fisked artciles");
    const mostFiskedArticles = await requestMostFiskedArticles(page, 12);
    articleDispatch({type: 'update', payload: mostFiskedArticles})
  };
  
  return (
    <>
      <div className="sorting-tabs">
        <ul>
          <li className={tab === 'most-recent' ? 'active' : ''}>
            <Link
              to="/"
              className="tab"
              onClick={e => {
                if (e && e.preventDefault) e.preventDefault();
                setTab('most-recent');
                setCurrentPage(1);
                loadRecentArticles(1);
              }}
            >
              Most Recent
            </Link>
          </li>
          <li className={tab === 'most-fisked' ? 'active' : ''}>
            <Link
              to="/"
              className="tab"
              onClick={e => {
                if (e && e.preventDefault) e.preventDefault();
                setTab('most-fisked');
                setCurrentPage(1);
                loadMostFiskedArticles(1);
              }}
            >
              Most Fisked
            </Link>
          </li>
        </ul>
      </div>
      <div className="article-section">
        { loadingArticles && (
          <div>Loading Articles... please wait...</div>
        )}
      </div>
    </>
  );
};
