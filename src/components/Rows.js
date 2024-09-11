import React, 
{
  useState,
} from 'react';

const Rows = ({ results }) => {
  let display;
  const [expandedCharacter, setExpandedCharacter] = useState(null);

  const handleToggleDetails = async (character) => {
    if (expandedCharacter && expandedCharacter.id === character.id) {
      setExpandedCharacter(null);
    } else {
      const episodes = await fetchEpisodes(character.episode);
      setExpandedCharacter({ ...character, episodes });
    }
  };

  const fetchEpisodes = async (episodeUrls) => {
    try {
      const episodePromises = episodeUrls.map(url => fetch(url).then(response => response.json()));
      const episodes = await Promise.all(episodePromises);
      return episodes.map(episode => {
        const match = episode.episode.match(/S(\d+)E(\d+)/);
        const season = match ? match[1] : 'Unknown';
        const episodeNum = match ? match[2] : 'Unknown';
        return {
          name: episode.name,
          season,
          episode: episodeNum
        };
      });
    } catch (error) {
      console.error('Error fetching episodes:', error);
      return [];
    }
  };

  console.log("expandedCharacter: ", expandedCharacter);

  if (results) {
    display = results.map((character) => {
      let { id, image, name, status, location, gender, species, episode, origin } = character;
    
      return (
        <div
          key={id}
          className="container"
        >
          <div className="row py-2 border-bottom">
            <div className="col-12 col-md-2 font-weight-bold">{name}</div>
            <div className="col-2 col-md-1 text-truncate">{status}</div>
            <div className="col-3 col-md-2 text-truncate">{species}</div>
            <div className="col-2 col-md-2 text-truncate">{gender}</div>
            <div className="col-3 col-md-2 text-truncate">{location.name}</div>
            <div className="col-2 col-md-2 text-truncate">{episode.length}</div>
            <div className="col-12 col-md-1 text-end">
              <a className="btn btn-info collapsed" data-bs-toggle="collapse" href={`#collapseItem${id}`} role="button" aria-expanded="false" aria-controls="collapseExample" onClick={() => handleToggleDetails(character)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-short" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="row collapse py-3 border-bottom" id={`collapseItem${id}`}>
          {expandedCharacter && expandedCharacter.id === character.id && (
            <>
            <div className="col-12 col-md-2">
              <img className="rounded w-100" src={image} alt="" />
            </div>
            <div className="col-12 col-md-4">
              <div className="font-weight-bold col-12">{name}</div>
              <div className="d-flex flex-row gap-4">
                <div>
                  <div>Status:</div>
                  <div>Species:</div>
                  <div>Origin:</div>
                  <div>Location:</div>
                </div>
                <div>
                  <div>{status}</div>
                  <div>{species}</div>
                  <div>{origin.name}</div>
                  <div>{location.name}</div>
                </div>
                </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="row border-bottom">
                <div className="col-8 font-weight-bold">
                  Episode name
                </div>
                <div className="col-2 font-weight-bold">
                  Season
                </div>
                <div className="col-2 font-weight-bold">
                  Episode
                </div>
              </div>
              
              {expandedCharacter.episodes.map((item, index) => ( 
                <div className="row" key={index}>
                  <div className="col-8 text-truncate">
                  { item.name }
                  </div>
                  <div className="col-2">
                  { item.season }
                  </div>
                  <div className="col-2">
                  { item.episode }
                  </div>
                </div>
              ))
              }
            </div>
            </>
          )}
          </div>
        </div>
      );
    });
  }
  else {
      display = "No Characters Found";
  }

  return <>{display}</>;
}

export default Rows;