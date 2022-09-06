import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import urlBase from "../base/urlBase";

const ViewMore = () => {

    const [moviesData, setMoviesData] = useState()

  let params = useParams();
  let base_url = urlBase.base_url
  let API_KEY = urlBase.API_KEY
  let image_url = urlBase.image_url
  let navigate = useNavigate()

  const getMovies = async () => {
    let url = `${base_url}/${params.category}/${params.type}?api_key=${API_KEY}&language=en-US&page=${pageno}`;
    let response = await fetch(url);
    let data = await response.json();
    setMoviesData(data);
};

  useEffect(()=> {
    getMovies()
  },[])



  let pageUrl = window.location.href
  let pageno = params.page.replace('page-','')


  return (
    <div className=" mt-16 w-full min-h-screen viewmore">
      <div className="w-full  flex flex-col items-center bg-dark-gray ">
        <div className=" overflow-y-hidden flex  items-center justify-center py-6 flex-wrap mt-2 ">
          <div className=" w-full flex mb-16 mt-6 justify-center">
            <h1 className="text-white text-4xl self-end">{params.name}</h1>
          </div>

{
    moviesData && moviesData.results.map((movie)=> {
        return(
            <div className="flex flex-col relative mb-16">
            <img
              src={image_url + movie.poster_path}
              className="poster rounded-lg mr-6 cursor-pointer transition-transform"
              onClick={()=> navigate(`/moreinfo/${movie.id}`)}
            />
            <h1 className="text-white pt-4 poster-title font-peakgo-book">
              {movie.original_title}
            </h1>
          </div>
        )
    })
}

          
<nav aria-label="Page navigation example">
  <ul class="inline-flex -space-x-px py-16">
    <li>
      <a href={pageUrl.replace(params.page,'page-' + (parseInt(pageno) - 1))} class=" previous_button py-5 font-peakgo-medium px-6 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
    </li>
    <li>
      <a href="#" aria-current="page" class="py-5 px-6 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">{pageno}</a>
    </li>
    <li>
        
      <a href={pageUrl.replace(params.page,'page-' + (parseInt(pageno) + 1))} class="next_button py-5 font-peakgo-medium px-6 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
    </li>
  </ul>
</nav>

          
        </div>
      </div>
    </div>
  );
};

export default ViewMore;
