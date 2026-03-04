import { useState, useCallback } from 'react';
import type { PhotoData, PexelsResponse } from '../interfaces/Photos';
import { PEXELS_API_KEY } from '../config/config';

export const usePhotos = () => {
  const [photos, setPhotos] = useState<PhotoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const fetchPhotos = useCallback(async (pageNum: number, query: string) => {
    try {
      setLoading(true);

      const url = query
        ? `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&page=${pageNum}&per_page=20`
        : `https://api.pexels.com/v1/curated?page=${pageNum}&per_page=20`;

      const response = await fetch(url, {
        headers: {
          Authorization: PEXELS_API_KEY,
        },
      });

      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }

      const data: PexelsResponse = await response.json();

      if (pageNum === 1) {
        setPhotos(data.photos);
      } else {
        setPhotos((prevPhotos) => [...prevPhotos, ...data.photos]);
      }

      setHasMore(data.photos.length > 0);
      setError(null);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : 'Error al cargar fotos',
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSearch = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (searchQuery.trim() !== '') {
        setIsSearching(true);
        setPage(1);
        fetchPhotos(1, searchQuery);
      }
    },
    [searchQuery, fetchPhotos],
  );

  const handleClearSearch = useCallback(() => {
    setSearchQuery('');
    setIsSearching(false);
    setPage(1);
    fetchPhotos(1, '');
  }, [fetchPhotos]);

  const loadMore = useCallback(() => {
    setPage((prevPage) => prevPage + 1);
  }, []);

  return {
    photos,
    loading,
    error,
    page,
    hasMore,
    searchQuery,
    isSearching,
    
    setSearchQuery,
    fetchPhotos,
    handleSearch,
    handleClearSearch,
    loadMore,
  };
};