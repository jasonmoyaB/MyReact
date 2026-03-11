import { useState, useCallback } from 'react';
import type { Artist, ArtistInfoResponse } from '../interfaces/music';
import { MUSIC_API_KEY, MUSIC_API_URL } from '../config/config';

export const useLastFm = () => {
  const [artist, setArtist] = useState<Artist | null>(null);
  const [similarArtists, setSimilarArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchArtist = useCallback(async (artistName: string) => {
    if (!artistName.trim()) {
      setError('Por favor ingresa un artista');
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const url = `${MUSIC_API_URL}?method=artist.getinfo&artist=${encodeURIComponent(
        artistName
      )}&api_key=${MUSIC_API_KEY}&format=json`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Error al buscar artista');
      }

      const data: ArtistInfoResponse = await response.json();

      if (!data.artist) {
        setError('Artista no encontrado');
        setArtist(null);
        setSimilarArtists([]);
        return;
      }

      setArtist(data.artist);

      // Obtener artistas similares
      if (data.artist.similar?.artist) {
        setSimilarArtists(data.artist.similar.artist.slice(0, 8));
      } else {
        setSimilarArtists([]);
      }

      setError(null);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : 'Error desconocido'
      );
      setArtist(null);
      setSimilarArtists([]);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    artist,
    similarArtists,
    loading,
    error,
    searchArtist,
  };
};