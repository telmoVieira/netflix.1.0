import React, {useEffect, useState} from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import "./App.css";
import FeatureMovie from './components/FeatureMovie';


export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);

  useEffect(()=>{
    const loadAll = async () => {
      //Pegar a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Pegar o destaque
      let originals = list.filter(i=>i.slug ==='originals');
      let randomChosen = Math.floor(Math.random()*(originals[0].items.results.lenght -1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen, 'tv');
      setFeatureData(chosenInfo);

      console.log(chosenInfo);
    }
    loadAll();
  }, []);


 return (
   <div className="page">
    
     {featureData && <FeatureMovie item={featureData} /> }
    
     <section className="lists">
       {movieList.map((item, key)=>(
        <MovieRow key={key}  title={item.title} items={item.items} />
       ))}
     </section>
   </div>
 );
}