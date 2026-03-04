import type { PhotoData } from "../../interfaces/Photos";

interface PhotosCardProps {
    photo: PhotoData;
}
const PhotosCard = ({ photo }: PhotosCardProps) => {
    return (
    <div className="photos-card">
      <img
        src={photo.src.medium}
        alt={photo.alt || 'Foto'}
        className="photo-image"
      />
      <div className="photo-overlay">
        <p className="photographer"> {photo.photographer}</p>
      </div>
    </div>
    );
}

export default PhotosCard
