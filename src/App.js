import { useEffect, useState } from "react";
import axios from "axios";


function App() {
  const [apiData, setApiData] = useState(null); 
  function getData(vegpont, fv) {
    axios
      .get(vegpont,fv)
      .then(function (response) {
        // handle success
        console.log(response.data)
        fv(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      
      })
      .finally(function () {
        // always executed
      
      });
  }
 
  useEffect(() => {
    getData("http://127.0.0.1:8000/api/books", setApiData); 
  }, []);
  return (
    <div className="App">
      <header className="App-header">
       Axios 
      </header>
    </div>
  );
}

export default App;
