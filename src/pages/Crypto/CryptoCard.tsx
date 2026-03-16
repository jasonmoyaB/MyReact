import type { CryptoData } from "../../interfaces/crypto";
import "../../styles/CryptoCard.css";

interface CryptoCardProps {
  crypto: CryptoData;
}

const CryptoCard = ({ crypto }: CryptoCardProps) => {
  const isPositive = crypto.price_change_percentage_24h >= 0;

  return (
    <tr className="crypto-row">
      <td>
        <span className="rank-badge">#{crypto.market_cap_rank}</span>
      </td>
      <td>
        <div className="crypto-name-cell">
          <span className="name">{crypto.name}</span>
          <span className="symbol">{crypto.symbol.toUpperCase()}</span>
        </div>
      </td>
      <td className="price">${crypto.current_price.toLocaleString()}</td>
      <td>
        <span className={`change-badge ${isPositive ? 'positive' : 'negative'}`}>
          {isPositive ? '▲' : '▼'} {isPositive ? '+' : ''}
          {crypto.price_change_percentage_24h.toFixed(2)}%
        </span>
      </td>
      <td className="market-cap">${(crypto.market_cap / 1e9).toFixed(2)}B</td>
    </tr>
  );
}

export default CryptoCard;
