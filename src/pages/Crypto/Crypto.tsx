import { useEffect, useState } from "react";
import type { CryptoData } from "../../interfaces/crypto";
import CryptoCard from "./CryptoCard";
import { CRYPTO_API_URL } from "../../config/config";

import "../../styles/Crypto.css";

const Crypto = () => {
  const [cryptos, setCryptos] = useState<CryptoData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await fetch(CRYPTO_API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch crypto data");
        }
        const data: CryptoData[] = await response.json();
        setCryptos(data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchCryptos();
  }, []);

  if (loading) {
    return (
      <div className="crypto-container">
        <div className="loading">
          <div className="spinner"></div>
          <p>Cargando datos...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="crypto-container">
        <div className="error"> Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="crypto-container">
      <div className="header">
        <h1> Top Criptomonedas</h1>
        <p className="subtitle">Datos en tiempo real del mercado crypto</p>
      </div>
      
      <div className="table-wrapper">
        <table className="crypto-table">
          <thead>
            <tr>
              <th>Ranking</th>
              <th>Moneda</th>
              <th>Precio</th>
              <th>Cambio 24h</th>
              <th>Cap. Mercado</th>
            </tr>
          </thead>
          <tbody>
            {cryptos.map((crypto) => (
              <CryptoCard key={crypto.id} crypto={crypto} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Crypto;
