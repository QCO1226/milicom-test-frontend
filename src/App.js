import './App.css';
import Comic from './components/Comic';
import Controls from './components/Controls';
import Footer from './components/Footer';
import {useEffect, useState} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const App = () =>{

  const [totalComics, setTotalComics] = useState(0);
  const [comicData, setComicData] = useState([]);
  const [currentComic, setCurrentComic] = useState(1);
  const [isLoading, setLoading] = useState(true);

  useEffect(()=>{
    setLoading(true);
    axios.get('http://localhost:4000/comic/'+currentComic)
      .then(response =>{ 
        setComicData(response.data);
        setLoading(false);
      })
      .catch(error => console.log(error))
  }, [currentComic])

  useEffect(()=>{
    axios.get('http://localhost:4000/comics/total')
      .then(response => setTotalComics(response.data.total))
      .catch(error => console.log(error))
  },[])

  const onChangeCurrentComic = (number) =>{
    setCurrentComic(number);
  }

  return (
    <div className="App">
      {
        isLoading ? (
            <FontAwesomeIcon icon={faSpinner} spin className='loading-spinner' />
        ):(
          <>
            <Comic data={comicData} />
            <div className='fixed-bottom'>
              <Controls total={totalComics} current={currentComic} changeCurrentComic={onChangeCurrentComic} />
              <Footer />
            </div>
          </>
        )
      }
    </div>
  );
}

export default App;
