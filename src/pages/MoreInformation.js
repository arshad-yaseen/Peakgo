import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import fetch from "../api/fetch";
import urlBase from "../base/urlBase";

const MoreInformation = () => {

  let params = useParams()
  let movieId = params.id

  let [movieDetails,setMovieDetails] = useState()
  let [castsAndCrews,setCastsAndCrews] = useState()
  let [trailer,setTrailer] = useState()

  let image_url = urlBase.image_url

  function getMovieDetails() {
    fetch.getMovieDetails(movieId,(data)=> {
      setMovieDetails(data);
    })
    fetch.getCastsAndCrews(movieId,(data)=> {
      setCastsAndCrews(data);
    })
    fetch.getVideos(movieId,(data)=> {
      console.log(data);
      data.results.map((data)=> {
        if(data.name.includes('Official Trailer')){
          setTrailer(data);
        }
      })
    })
  }

  useEffect(()=> {
    getMovieDetails()


  },[])




  if(movieDetails && castsAndCrews && trailer) {
    return (
      <div>

        <div className="w-full">
          <div className="moreinfo-banner-wrapper  w-full">
            <img
              src={image_url + movieDetails.backdrop_path}
              className="moreinfo-banner w-full h-full"
            />
            <div className="moreinfo-banner-overlay  w-full absolute bottom-0"></div>
            <div className="moreinfo-hero-wrapper w-full h-96  absolute bottom-0 flex lg:flex-row flex-col">
              <div className="lg:w-1/2 w-full h-full flex flex-col items-center justify-center -mr-24 ml-8">
                <img
                  src={image_url + movieDetails.poster_path}
                  className="moreinfo-hero-poster"
                />
                <div className="w-80 h-12 flex items-center mt-4">
                  <div className="h-full w-60 rounded-md flex items-center">
                  <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        enableBackground="new 0 0 501.28 501.28"
        version="1.1"
        viewBox="0 0 501.28 501.28"
        xmlSpace="preserve"
        className="h-6"
      >
        <path
          fill="#FFCD00"
          d="M501.28 194.37L335.26 159.33 250.64 12.27 250.64 419.77 405.54 489.01 387.56 320.29z"
        ></path>
        <path
          fill="#FFDA44"
          d="M166.02 159.33L0 194.37 113.72 320.29 95.74 489.01 250.64 419.77 250.64 12.27z"
        ></path>
      </svg>
  
      <p className="text-white ml-2" >{movieDetails.vote_average}</p>
      <div className="h-4 px-2 ring-1 ring-offset-1 ring-white text-white flex items-center justify-center rounded-md font-peakgo-medium text-sm ml-4">
        {movieDetails.vote_count} votes
      </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full h-full flex justify-center pr-52 flex-col">
                <h1 className="text-white text-4xl">
                  {movieDetails.original_title}
                </h1>
                <div className=" w-full flex flex-row">
                  <p className="text-sm bg-secondary text-black cursor-pointer font-peakgo-medium ring-1 ring-offset-1 py-1 px-8 ring-green-400 rounded-full my-8 mr-4">
                    {
                      movieDetails.status == 'Released' ? `Released on ${movieDetails.release_date}` : `Releasing on ${movieDetails.release_date}`
                    }
                  </p>

                  {
                    movieDetails.genres.map((data,index)=> {
                      if(index < 2) {
                        return (
                          <p className="text-sm hover:bg-white hover:text-black cursor-pointer text-white font-peakgo-book ring-1 ring-offset-1 py-1 px-8 ring-white rounded-full my-8 mr-4">
                          {data.name}
                        </p>
                        )
                      }
                    })
                  }
  
      
                </div>
                <p className="text-white font-peakgo-medium text-sm">
                 {movieDetails.overview}
                </p>
                <h1 className="text-white text-2xl font-medium mt-3">Casts</h1>
                <div className="cast-wrapper w-full h-64 flex overflow-x-scroll overflow-y-hidden mt-3">

                    {
                      castsAndCrews.cast.map((data)=> {

                        if(data.profile_path != null) {
                          return (
                            <div className="cast-image-wrapper h-full mr-4 relative cursor-pointer">
                            <img
                              src={image_url + data.profile_path}
                              className="h-full w-full"
                            />
                            <p className="cast-name  absolute text-white bottom-0 p-2 font-peakgo-medium text-sm leading-relaxed bg-slate-900  w-full">
                              {data.original_name} <br />
                              <span className="text-slate-500 font-peakgo-medium"  >{data.known_for_department} as {data.character}</span>
                            </p>
                          </div>
                          )
                        }

                       
                      })
                    }

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bar-informations w-full h-64 bg-black flex items-center justify-center">
          <h1 className="text-white text-center text-3xl mx-8" >Adult <br /> <span className="font-peakgo-medium" >{movieDetails.adult ? 'Yes' : 'No'}</span></h1>
          <h1 className="text-white text-center text-3xl mx-8" >Budget <br /> <span className="font-peakgo-medium" >﹩{movieDetails.budget}</span></h1>
          <h1 className="text-white text-center text-3xl mx-8" >Popularity <br /> <span className="font-peakgo-medium" >{movieDetails.popularity}</span></h1>
          <h1 className="text-white text-center text-3xl mx-8" >Org Language <br /> <span className="font-peakgo-medium capitalize" >{movieDetails.original_language}</span></h1>
          <h1 className="text-white text-center text-3xl mx-8" >Revenue <br /> <span className="font-peakgo-medium" >﹩{movieDetails.revenue}</span></h1>
          <h1 className="text-white text-center text-3xl mx-8" >Runtime <br /> <span className="font-peakgo-medium" >{movieDetails.runtime} mins</span></h1>
        </div>

        <div className="w-full h-16 pl-14 flex bg-lite-black justify-center">
          <h1 className="text-white text-3xl self-end"  >Crews</h1>
        </div>

          <div className="w-full py-8 px-8 flex overflow-scroll bg-lite-black no-scrollbar">

            {
              castsAndCrews.crew.map((data)=> {
                if(data.profile_path != null) {
                  return ( 
                    <div className="crew-wrapper h-80 rounded-2xl relative flex flex-col items-center  mx-6 my-6">
                        <img className="w-full h-3/4 rounded-md" src={image_url + data.profile_path} />
                        <h1 className="text-white mt-4 text-center" >{data.original_name} <br /> <span className="font-peakgo-medium text-slate-500" >{data.department}</span> <br /><span className="font-peakgo-medium text-slate-500" >{data.job}</span></h1>
                    </div>
                      )
                }
               
              })
            }
            
          </div>


       <div id="trailer" className="w-full h-screen flex flex-col mt-12" >
       <div className="trailer-div-1 w-full flex items-center">
          <h1 className="text-white font-peakgo-medium text-2xl absolute left-48" >Official Trailer</h1>
          <h1 className="text-black bg-white font-peakgo-book absolute right-48  text-md px-2 rounded-full ring-1 ring-offset-1 ring-white" >1080p <span className="text-red-600" >HD</span></h1>
       </div>
       <div className="trailer-div-2 w-full flex items-center justify-center">

       <iframe width="1080" height="624" src={"https://www.youtube.com/embed/" + trailer.key} title="Thallumaala Paattu - Lyric Video| Thallumaala| Tovino Thomas| Khalid Rahman|Ashiq Usman|Vishnu Vijay" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

       </div>
       <div className="trailer-div-3 w-full flex items-center">
       <h1 className="text-white font-peakgo-medium text-xl absolute left-48" >{movieDetails.original_title + ' - ' + trailer.name}</h1>
          
       </div>

       </div>

       <div className="w-full h-16 pl-14 flex bg-lite-black justify-center mt-12">
          <h1 className="text-white text-3xl self-end"  >Production Companies</h1>
        </div>

          <div className="w-full px-8 py-8 flex overflow-scroll bg-lite-black no-scrollbar justify-center">

          {
          movieDetails.production_companies.map((data)=> {
            if(data.logo_path != null) {
              return(
                <div className="crew-wrapper h-72 rounded-2xl relative flex flex-col items-center ">
                <img className="h-36 w-36 rounded-full" src={image_url + data.logo_path} />
                <h1 className="text-white mt-4 text-center" >{data.name} <br /> <span className="font-peakgo-medium text-slate-500" >{data.origin_country}</span></h1>
            </div>
              )
            }
          })
        }
          </div>

      </div>
    );
  }

};

export default MoreInformation;
