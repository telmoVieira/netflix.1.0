const API_KEY = "59df9cdbc1e3525cea77b2db7d94750e";
const API_BASE = "https://api.themoviedb.org/3";
                  

/*
- Originais Netflix
- Recomendados (trending) 
- Mais votados (top rated)
- Acção
- Comédia
- Terror
- Romance
- Documentários
*/

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
           {
             slug: 'originals',
             title: 'Originais NetFlix',
             items: await basicFetch(`/discover/tv/?with_networl=213&language=pt-PT&api_key=${API_KEY}`)   
           },
           {
            slug: 'trending',
            title: 'Recomendados para Vocês',
            items: await basicFetch(`/trending/all/week?language=pt-PT&api_key=${API_KEY}`) 
          },
          {
            slug: 'toprated',
            title: 'Mais Votados',
            items: await basicFetch(`/movie/top_rated?language=pt-PT&api_key=${API_KEY}`)  
          },
          {
            slug: 'action',
            title: 'Acção',
            items:  await basicFetch(`/discover/movie?with_genres=28&language=pt-PT&api_key=${API_KEY}`)   
          },
          {
            slug: 'comedy',
            title: 'Comedia',
            items: await basicFetch(`/discover/movie?with_genres=35&language=pt-PT&api_key=${API_KEY}`)     
          },
          {
            slug: 'horror',
            title: 'Terror',
            items: await basicFetch(`/discover/movie?with_genres=27&language=pt-PT&api_key=${API_KEY}`)   
          },
          {
            slug: 'romance',
            title: 'Romance',
            items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-PT&api_key=${API_KEY}`)  
          },
          {
            slug: 'documentary',
            title: 'Documentários',
            items: await basicFetch(`/discover/movie?with_genres=99&language=pt-PT&api_key=${API_KEY}`)
          }
        ]
    },

    getMovieInfo: async (movieId, type) => {

      let info ={}
      
      if(movieId) {
        switch(type) {
          case 'movie':
            info = await basicFetch(`/movie/${movieId}?language=pt-PT&api_key=${API_KEY}`);
          break;
          case 'tv':
            info = await basicFetch(`/tv/${movieId}?language=pt-PT&api_key=${API_KEY}`);
          break;
          default:
            info = null;
            break;
        }
      }
    
      return info;
    } 

}