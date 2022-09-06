import React from 'react'

const GenresList = ({data}) => {

  return (
    <div id='genres' className='w-full h-96 flex flex-col items-center mt-16' >
        <div className="h-16 w-full flex items-center justify-center">
            <h1 className="text-4xl text-white" >Watch your Favorite Genres</h1>
        </div>
        <div className=" w-3/4 flex flex-wrap justify-center mt-4">

            {
                data && data.map((genres)=> {
                    return (
                        <p className="text-white font-peakgo-medium cursor-pointer mx-4 my-6  px-6 py-1 rounded-full ring-2 ring-offset-1 
                        ring-white hover:bg-white hover:text-black" >{genres.name}</p>
                    )
                })
            }

          
        </div>

    </div>
  )
}

export default GenresList