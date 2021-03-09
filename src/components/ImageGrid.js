import React from 'react'

 const ImageGrid = ( {item, tag} ) => {

  const tags = item.tags.split(",");
    return (
        <div className="max-w-md rounded overflow-hidden shadow-lg h-30" >
        <img src={item.webformatURL} alt="Random" className="w-full transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 ..." />
        <div className="px-6 py-4">
        <div className="font-bold text-red-600 text-base mb-3">
        Clicked By : {item.user}
        </div>
        <ul>
          <li className="text-sm"><b>Views</b> : {item.views}</li>
          <li className="text-sm"><b>Likes</b> : {item.likes}</li>
          <li className="text-sm"><b>Comments</b> : {item.comments}</li>
          <li className="text-sm"><b>Downloads</b> : {item.downloads}</li>
        </ul>
        </div>
        <div className="px-6 text-base py-4">
            {tags.map((tag, index) => (
            <span key={index} className="inline-block mr-1 mt-1 bg-gray-200 
            rounded-full px-2 py-1 text-sm font-semibold 
            text-gray-800">
              #{tag}
         </span>

            ))}
        </div>
      </div>
    )
}

export default ImageGrid
