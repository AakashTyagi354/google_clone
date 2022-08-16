import React from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider'
import Search from './Search';
import "./serachPage.css"
import UseGooglesearch from './UseGooglesearch';
import SearchIcon from '@mui/icons-material/Search';
import FeedIcon from '@mui/icons-material/Feed';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function SearchPage() {
  const [{ term ='tesla' }, dispach] = useStateValue();
  const { data } = UseGooglesearch(term);

  console.log(data);
  return (
    <div className='searchPage'>
      <div className="serachPage-header">
        <Link to='/'>
          <img className="searchLogo" src="https://www.edigitalagency.com.au/wp-content/uploads/google-logo-png-transparent-background-large-new.png" />
        </Link>

        <div className="searchPage-header-body">
          <Search hideButtons className="search-search" />
          <div className="searchPage-options">
            <div className="searchPage_optionLeft">
              <div className="searchPage-option">
                <SearchIcon />
                <Link to='/all'>All</Link>
              </div>
              <div className="searchPage-option">
                <FeedIcon />
                <Link to='/news'>news</Link>
              </div>
              <div className="searchPage-option">
                <ImageIcon />
                <Link to='/images'>images</Link>
              </div>
              <div className="searchPage-option">
                <LocalOfferIcon />
                <Link to='/shopping'>shopping</Link>
              </div>
              <div className="searchPage-option">
                <RoomIcon />
                <Link to='/maps'>maps</Link>
              </div>
              <div className="searchPage-option">
                <MoreVertIcon />
                <Link to='/more'>more</Link>
              </div>
            </div>
            <div className="optionRight">
              <div className="searchPage-option">

                <Link to='/settings'>Setting</Link>
              </div>
              <div className="searchPage-option">

                <Link to='/tools'>Tools</Link>
              </div>
            </div>
          </div>
        </div>



      </div>
      {term && (
        <div className="searchPage-results">
               <p className="searchpage-resultCount">About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}</p>
               {data?.items.map(item =>(
                 <div className="searchPage-result" >
                  
                   <a href={item.link} >
                     {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                       <img className='searchpage-resultImage' src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src} alt="" />
                     )}
                        {item.displayLink}
                   </a>
                   <a href={item.link} className="searchPage-resultTitle">
                     <h2>{item.title}</h2>
                   </a>
                   <p className="result-snippet">
                     {item.snippet}
                   </p>
                  
                 </div>
               ))}
        </div>
      )}

    </div>
  )
}

export default SearchPage