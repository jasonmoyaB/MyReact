import { useEffect } from 'react';
import PhotosCard from './PhotosCard';
import { usePhotos } from '../../hooks/usePhotos';
import '../../styles/Photos.css';

const Photos = () => {
  const {
    photos,
    loading,
    hasMore,
    searchQuery,
    isSearching,
    page,
    
    setSearchQuery,
    fetchPhotos,
    handleSearch,
    handleClearSearch,
    loadMore,
  } = usePhotos();

  useEffect(() => {
    fetchPhotos(page, searchQuery);
  }, [page, searchQuery, fetchPhotos]);

  return (
    <div className="photos-container">
      <h1>Galería de Fotos</h1>

      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Buscar fotos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-btn">
          🔍 Buscar
        </button>
        {isSearching && (
          <button
            type="button"
            className="clear-btn"
            onClick={handleClearSearch}
          >
            ✕ Limpiar
          </button>
        )}
      </form>

      {isSearching && (
        <p className="search-results">
          Resultados para: <strong>"{searchQuery}"</strong>
        </p>
      )}

      <div className="photos-grid">
        {photos.map((photo) => (
          <PhotosCard key={photo.id} photo={photo} />
        ))}
      </div>

      {loading && photos.length > 0 && (
        <p className="loading">Cargando más fotos...</p>
      )}

      {hasMore && !loading && (
        <button className="load-more-btn" onClick={loadMore}>
          Cargar más
        </button>
      )}

      {!hasMore && photos.length > 0 && (
        <p className="no-more">No hay más fotos disponibles</p>
      )}

      {photos.length === 0 && loading && (
        <div className="loading">Cargando fotos...</div>
      )}

      {photos.length === 0 && !loading && (
        <p className="no-results">No se encontraron fotos</p>
      )}
    </div>
  );
};

export default Photos;