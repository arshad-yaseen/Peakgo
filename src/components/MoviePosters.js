import React, { useEffect, useState } from "react";
import fetch from "../api/fetch";
import urlBase from "../base/urlBase";
import { Link, useNavigate } from 'react-router-dom'

const MoviePosters = ({data,type_name,original_type_name,category}) => {


  let image_url = urlBase.image_url
  let navigate = useNavigate()

  const posterClick = () => {
    navigate(`/${type_name}/viewmore/${category}/${original_type_name}/page-1`)
  }

  return (
    <div className="w-full movie-posters-wrapper  flex flex-col pl-16 pr-24">
      <div className="h-16 w-full bg-black flex">
        <h1 className="text-white text-2xl self-end">{type_name}</h1>
        <p className="text-white self-end absolute right-32 font-peakgo-book px-4 text-sm ring-1 ring-white ring-offset-1 rounded-full py-1 hover:bg-white hover:text-black cursor-pointer" onClick={posterClick}>View more</p>
      </div>

      <div className=" overflow-y-hidden flex  items-center py-6 overflow-x-scroll mt-2">

{

data && data.map((data)=> {

        return (
          <Link to={'moreinfo/' + data.id} className="flex flex-col relative" >
          <img
             src={image_url + data.poster_path}
             className="poster rounded-lg mr-6 cursor-pointer transition-transform"
             loading="lazy"
           />
           <h1 className="text-white pt-4 poster-title font-peakgo-book">
              {data.original_title}
           </h1>
          </Link>
        )
      })

}
      </div>
    </div>
  );
};

export default MoviePosters;
