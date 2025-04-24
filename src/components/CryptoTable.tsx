import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { updateAssets } from '../store/assetSlice';
import '../index.css';

const CryptoTable = () => {
    const assets = useSelector((state: RootState) => state.assets);
    const dispatch = useDispatch<AppDispatch>();
    const [filter, setFilter] = useState('');
    const [sortKey, setSortKey] = useState<'change24h' | 'volume24h' | null>(
        null
    );

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(updateAssets());
        }, 1500);
        return () => clearInterval(interval);
    }, [dispatch]);

    const filteredAssets = filter
        ? [...assets].filter((asset) =>
              asset.name.toLowerCase().includes(filter.toLowerCase())
          )
        : [...assets];

    if (sortKey) {
        filteredAssets.sort((a, b) => {
            if (sortKey === 'volume24h') {
                return parseFloat(b.volume24h) - parseFloat(a.volume24h);
            }
            return (b[sortKey] as number) - (a[sortKey] as number);
        });
    }

    return (
        <div className='table-container'>
            <input
                type='text'
                placeholder='Search asset...'
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className='search-bar'
            />
            <div className='sort-buttons'>
                <button onClick={() => setSortKey('change24h')}>
                    Sort by 24h %
                </button>
                <button onClick={() => setSortKey('volume24h')}>
                    Sort by Volume
                </button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Logo</th>
                        <th>Name</th>
                        <th>Symbol</th>
                        <th>Price ($)</th>
                        <th>1h %</th>
                        <th>24h %</th>
                        <th>7d %</th>
                        <th>Market Cap</th>
                        <th>24h Volume</th>
                        <th>Circulating Supply</th>
                        <th>Max Supply</th>
                        <th>7D Chart</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredAssets.map((asset, index) => (
                        <tr key={asset.id}>
                            <td>{index + 1}</td>
                            <td>{asset.logo}</td>
                            <td>{asset.name}</td>
                            <td>{asset.symbol}</td>
                            <td>{asset.price.toFixed(2)}</td>
                            <td
                                className={
                                    asset.change1h >= 0 ? 'green' : 'red'
                                }>
                                {asset.change1h}%
                            </td>
                            <td
                                className={
                                    asset.change24h >= 0 ? 'green' : 'red'
                                }>
                                {asset.change24h}%
                            </td>
                            <td
                                className={
                                    asset.change7d >= 0 ? 'green' : 'red'
                                }>
                                {asset.change7d}%
                            </td>
                            <td>{asset.marketCap}</td>
                            <td>{asset.volume24h}</td>
                            <td>{asset.supply}</td>
                            <td>{asset.maxSupply}</td>
                            <td>{asset.chart}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CryptoTable;
