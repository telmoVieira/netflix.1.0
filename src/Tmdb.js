const API_KEY = "38c007f28d5b66f36b9c3cf8d8452a4b";
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

// eslint-disable-next-line import/no-anonymous-default-export
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
    }
}