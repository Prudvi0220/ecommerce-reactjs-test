import { useEffect, useContext, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import { FilterContext } from "../context/FilterContext";
import Skeleton from "../components/Skeleton";
import styled from "styled-components";

const PageTitle = styled.h1`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 600;
`;

function Home() {

  const dispatch = useDispatch();

  const { search, category, size } = useContext(FilterContext);

  const { items, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredProducts = useMemo(
    () =>
      items
        .filter((product) =>
          product.title.toLowerCase().includes(search.toLowerCase())
        )
        .filter((product) => (category ? product.category === category : true))
        .filter((product) => (size ? product.size === size : true)),
    [items, search, category, size]
  );

  // if (loading) return <h2>Loading...</h2>;
 

  if (error) return <h2>{error}</h2>;

  return (
    <div className="container">
      <PageTitle>ReactJS Technical Test – Mini E-Commerce Application - by Prudviraj Marigidde</PageTitle>
      <SearchBar />
      <Filter />
      <span className="product-count">{filteredProducts.length} product(s) found</span>
      <div className="grid">
        

      {
        loading && Array(8).fill().map((_, i) => <Skeleton key={i} />)
      }

      
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>

    </div>
  );
}

export default Home;