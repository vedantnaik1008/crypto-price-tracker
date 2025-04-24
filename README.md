# Crypto Price Tracker

A responsive real-time cryptocurrency price tracker built with **React**, **Redux Toolkit**, and **TypeScript**. The app simulates WebSocket-like updates every 1.5 seconds and displays five major cryptocurrencies with real-time metrics like price, 24h volume, and percentage changes.

---

## 🔧 Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/vedantnaik1008/crypto-price-tracker.git
   cd crypto-price-tracker
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **View in browser:**
   Open [http://localhost:5173](http://localhost:5173)

---

## 🛠 Tech Stack & Architecture

### Frontend:
- **React**: UI framework
- **Redux Toolkit**: State management
- **TypeScript**: Type safety
- **Vite**: Lightning-fast build tool

### File Structure:
```
├── src/
│   ├── assets.ts          # Initial static data
│   ├── components/
│   │   └── CryptoTable.tsx
│   ├── store/
│   │   ├── assetSlice.ts  # Reducer for live updates
│   │   └── index.ts       # Store configuration
│   ├── types/
│   │   └── Asset.ts       # Asset type definition
│   ├── utils/
│   │   └── generateRandomChange.ts
│   ├── App.tsx
│   └── main.tsx
```

### Key Features:
- Simulated real-time updates using `setInterval`
- Asset sorting and filtering
- Persistent localStorage caching
- Responsive design

---

## 📽 Demo

![click here for video](https://www.loom.com/share/21e83dc765e647b098d23cc4cc7f6aee?sid=370172d3-861b-42ed-a4f1-e044dd616998)

