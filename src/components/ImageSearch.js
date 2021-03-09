import React, { useState}  from "react";

const ImageSearch = ( {searchText} ) => {
    const [text, setText] = useState()

    const onSubmit = (e) => {
        e.preventDefault();

        searchText(text);
    }

    return(
        <div className="max-w-md overflow-hidden my-12 mx-auto">
            <form on onSubmit={onSubmit} className="w-full max-w-md">
                <div className="flex items-center border-b-2 border-green-500 py-2">
                    <input className="appearance-none bg-transparent border-none 
                    outline-none w-full text-gray-700 mr-2 py-1 px-2 leading-tight 
                    focus:outline-none" onChange={e => setText(e.target.value)} 
                    type="text" placeholder="Type to Search Images....." />
                    <button className="flex-shrink-0 bg-green-500 
                    hover:bg-green-700 border-green-500 hover:border-green-700 
                    text-sm border-4 text-white
                    py-1 px-2 rounded" type="submit">
                        Search 
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ImageSearch