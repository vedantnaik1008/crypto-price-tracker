import { createSlice } from '@reduxjs/toolkit';
import { Asset } from '../types/Asset';
import { generateRandomChange } from '../utils/generateRandomChange';

const initialState: Asset[] = JSON.parse(
    localStorage.getItem('cryptoAssets') ||
        JSON.stringify([
            {
                id: 1,
                logo: '🟠',
                name: 'Bitcoin',
                symbol: 'BTC',
                price: 30000,
                change1h: 0.2,
                change24h: -1.2,
                change7d: 3.4,
                marketCap: '600B',
                volume24h: '30B',
                supply: '19M',
                maxSupply: '21M',
                chart: '📈'
            },
            {
                id: 2,
                logo: '🟣',
                name: 'Ethereum',
                symbol: 'ETH',
                price: 2000,
                change1h: -0.1,
                change24h: 2.5,
                change7d: 1.1,
                marketCap: '240B',
                volume24h: '15B',
                supply: '120M',
                maxSupply: '-',
                chart: '📉'
            },
            {
                id: 3,
                logo: '🟢',
                name: 'Tether',
                symbol: 'USDT',
                price: 1,
                change1h: 0.0,
                change24h: 0.1,
                change7d: -0.1,
                marketCap: '83B',
                volume24h: '50B',
                supply: '83B',
                maxSupply: '-',
                chart: '⏸️'
            },
            {
                id: 4,
                logo: '🔵',
                name: 'BNB',
                symbol: 'BNB',
                price: 300,
                change1h: -0.3,
                change24h: 1.0,
                change7d: -2.5,
                marketCap: '48B',
                volume24h: '2B',
                supply: '160M',
                maxSupply: '200M',
                chart: '📉'
            },
            {
                id: 5,
                logo: '🟡',
                name: 'Solana',
                symbol: 'SOL',
                price: 100,
                change1h: 0.5,
                change24h: 3.2,
                change7d: 5.0,
                marketCap: '40B',
                volume24h: '5B',
                supply: '400M',
                maxSupply: '-',
                chart: '📈'
            }
        ])
);

const assetSlice = createSlice({
    name: 'assets',
    initialState,
    reducers: {
        updateAssets: (state) => {
            const updated = state.map((asset) => ({
                ...asset,
                price: +(
                    asset.price *
                    (1 + generateRandomChange() / 100)
                ).toFixed(2),
                change1h: generateRandomChange(),
                change24h: generateRandomChange(),
                volume24h: (Math.random() * 100).toFixed(2) + 'B'
            }));
            localStorage.setItem('cryptoAssets', JSON.stringify(updated));
            return updated;
        }
    }
});

export const { updateAssets } = assetSlice.actions;
export default assetSlice.reducer;
