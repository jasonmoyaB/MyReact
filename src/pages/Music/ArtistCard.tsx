import type { Artist } from '../../interfaces/music';

interface ArtistCardProps {
  artist: Artist;
  isMain?: boolean;
  isSimilar?: boolean;
}

const ArtistCard = ({ artist, isMain = false, isSimilar = false }: ArtistCardProps) => {
  // Obtener la mejor imagen de Last.fm
  const getImageUrl = () => {
    if (!artist.image || artist.image.length === 0) {
      return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop';
    }
    return 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop';
  };

  const imageUrl = getImageUrl();
  
  const listeners = artist.listeners 
    ? parseInt(artist.listeners).toLocaleString() 
    : 'N/A';

  if (isMain) {
    return (
      <div className="artist-card-main">
        <img 
          src={imageUrl} 
          alt={artist.name} 
          className="artist-image-main"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop';
          }}
        />
        <div className="artist-info-main">
          <h2 className="artist-name">{artist.name}</h2>
          <div className="artist-stats">
            <div className="stat">
              <span className="stat-label">👥 Oyentes</span>
              <span className="stat-value">{listeners}</span>
            </div>
          </div>
          {artist.bio?.summary && (
            <div className="artist-bio">
              <p>{artist.bio.summary.replace(/<[^>]*>/g, '')}</p>
            </div>
          )}
          <a 
            href={artist.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="artist-link"
          >
            Ver en Last.fm →
          </a>
        </div>
      </div>
    );
  }

  if (isSimilar) {
    return (
      <div className="artist-card-similar">
        <img 
          src={imageUrl} 
          alt={artist.name} 
          className="artist-image-similar"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop';
          }}
        />
        <div className="artist-info-similar">
          <h3 className="artist-name-similar">{artist.name}</h3>
          <p className="artist-listeners-similar">{listeners} oyentes</p>
        </div>
      </div>
    );
  }

  return null;
};

export default ArtistCard;