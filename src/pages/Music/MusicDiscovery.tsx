import { useState } from 'react';
import { useLastFm } from '../../hooks/useLastFm';
import ArtistCard from './ArtistCard';
import '../../styles/MusicDiscovery.css';

const MusicDiscovery = () => {
  const [searchInput, setSearchInput] = useState('');
  const { artist, similarArtists, loading, error, searchArtist } = useLastFm();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchArtist(searchInput);
  };

  const handleSimilarClick = (artistName: string) => {
    setSearchInput(artistName);
    searchArtist(artistName);
  };

  return (
    <div className="music-discovery-container">
      <h1>Music Discovery</h1>
      <p className="subtitle">Descubre artistas similares y explora nueva música</p>

      {/* Búsqueda */}
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Busca un artista..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-btn">
            Buscar
        </button>
      </form>

      {/* Error */}
      {error && <div className="error-message">{error}</div>}

      {/* Loading */}
      {loading && <div className="loading">Cargando...</div>}

      {/* Artista principal */}
      {artist && !loading && (
        <div className="main-artist-section">
          <ArtistCard artist={artist} isMain />
        </div>
      )}

      {/* Artistas similares */}
      {similarArtists.length > 0 && !loading && (
        <div className="similar-section">
          <h2>Artistas similares</h2>
          <div className="similar-grid">
            {similarArtists.map((similarArtist) => (
              <div
                key={similarArtist.name}
                onClick={() => handleSimilarClick(similarArtist.name)}
                className="similar-card-wrapper"
              >
                <ArtistCard artist={similarArtist} isSimilar />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Estado inicial */}
      {!artist && !loading && !error && (
        <div className="empty-state">
          <p>Busca un artista para comenzar a explorar...</p>
        </div>
      )}
    </div>
  );
};

export default MusicDiscovery;