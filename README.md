## Mini E‑Commerce React Application

This is a small clothing e‑commerce app built as a ReactJS technical test.  
It focuses on clean structure, modern React patterns, and a simple but smooth UX.

---

## Getting Started

- **Requirements**
  - Node.js (LTS)
  - npm

- **Install dependencies**

```bash
npm install
```

- **Start the dev server**

```bash
npm run dev
```

Open the URL that Vite prints in the terminal (usually `http://localhost:5173`).

- **Create a production build**

```bash
npm run build
```

- **Preview the production build**

```bash
npm run preview
```

---

## Tech Stack & Architecture

- **React + Hooks** – all UI is written as functional components using hooks.
- **Vite** – fast dev server and bundler.
- **React Router** – two main routes:
  - `/` – product listing page.
  - `/product/:id` – product details page.
- **Redux Toolkit + React Redux** – central store for product data:
  - `products` slice with `createAsyncThunk` for fetching the list.
- **React Context** – `FilterContext` keeps search text, category and size filters.
- **Axios** – API client for `https://dummyjson.com`.
- **Global CSS** – main layout, grid, and skeleton styles in `src/styles/GlobalStyles.css`.
- **styled-components** – used for a few component-level styles (e.g. page title), to complement the global CSS.

The general flow:
- App bootstraps Redux + `FilterContext`.
- Home page fetches products into the Redux store.
- Filters and search are applied on top of the cached products.
- Product cards link into the details page via React Router.

---

## Features

### Product Listing (`/`)

- Loads **100 products** from the DummyJSON public API.
- Each card shows:
  - Product image
  - Title
  - Price
  - Short (truncated) description
  - Category
  - Simulated clothing size
- Includes:
  - Loading state with skeleton cards while data is fetched.
  - Error message if the API call fails.
  - Search bar that filters by **title**.
  - Dropdowns to filter by **category** and **size**.
  - Product count indicator for the current filters.
- Performance touches:
  - Products cached in Redux (no refetch on simple navigation).
  - Filtering wrapped in `useMemo`.
  - `ProductCard` wrapped with `React.memo` to avoid extra renders.

### Product Details (`/product/:id`)

- Click a card to navigate to the details page.
- Fetches a single product by ID from the same API.
- Shows:
  - Large product image
  - Category
  - Full title
  - Full description
  - Price
- Uses a dedicated skeleton while loading.
- Shows a friendly error state with a “Back to Home” link if something goes wrong.

---

## Assumptions

- **API**
  - Uses `https://dummyjson.com/products` as the product source.
  - The `limit=100` parameter is enough to satisfy the “at least 100 products” requirement.

- **Clothing focus**
  - The API contains general products, not just clothing.
  - For this test, sizes are **simulated** by assigning each product a random size from `["S", "M", "L", "XL"]`.
  - Category filter options are a small, hard-coded list of clothing-like categories (e.g. `mens-shirts`, `womens-dresses`, etc.).

- **Filter persistence**
  - Search text, category and size are stored in `localStorage`.
  - On page load, the app reads these values to restore the last-used filters.

- **Performance**
  - For ~100 items, simple optimizations (caching, memoization, skeletons) are sufficient.
  - Heavy-weight optimizations like virtualization are intentionally left out to keep the codebase focused and readable.

---

## How to Use the App

1. Start the dev server with `npm run dev`.
2. Open the app in your browser.
3. On the home page:
   - Scroll through the product grid.
   - Type in the search bar to filter by title.
   - Adjust category and size using the dropdowns.
4. Click any product card to open its details page.
5. Refresh the browser or navigate back and forth:
   - Your search and filter selections should stay intact thanks to `localStorage`.


By 
Prudvi raj Marigidde