import React, {useState, useEffect} from "react";
import ImageGrid from "./components/ImageGrid";
import ImageSearch from "./components/ImageSearch";

const App = () => {

const [items, setItems] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [keyword, setKeyword] = useState("");

useEffect(() => {
  fetch(`https://pixabay.com/api/?key=20576487-88296dbfecbac139c2945a230&q=${keyword}&image_type=photo&pretty=true`)
  .then(res => res.json())
  .then(data => {
    setItems(data.hits);
    setIsLoading(false);
  })
  .catch(err => console.log(err));
  
}, [keyword])

  return (
    <div className="container mx-auto">
      <ImageSearch searchText= {(text) => setKeyword(text) } />

    {!isLoading && items.length === 0 && <h1 className="text-4xl text-center mx-auto mt-32">
       No Images Found
         </h1>}

      {isLoading ? 
      <h1 className="text-6xl text-center mx-auto mt-32">
        <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" className="mx-auto" alt="Loading"/>
         </h1> : 
        <div className="grid grid-cols-4 gap-6">
          {items.map(item =>  (
            <ImageGrid key={item.id} item={item} />
          ))}
      </div>}
    </div>
  );
}

export default App;
