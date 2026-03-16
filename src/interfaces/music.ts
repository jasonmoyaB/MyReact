export interface Artist {
  name: string;
  mbid?: string;
  url: string;
  image?: {
    size: string;
    text: string;
  }[];
  listeners?: string;
  playcount?: string;
  bio?: {
    links?: {
      link: {
        text: string;
        href: string;
      };
    };
    published?: string;
    summary?: string;
    content?: string;
  };
  similar?: {
    artist: Artist[];
  };
}

export interface ArtistSearchResponse {
  results: {
    opensearch: {
      Query: {
        searchTerms: string;
      };
    };
    artistmatches: {
      artist: Artist[];
    };
  };
}

export interface ArtistInfoResponse {
  artist: Artist;
}