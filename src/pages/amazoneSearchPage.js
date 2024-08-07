import { useEffect, useState } from "react";
import CatBar from "../components/categorybar";
import NavBar from "../components/navbar";

const SearchPage = (props) => {
  const { Catoge ,searchText, setSearchText } = props;
  //  let searchText = ''
  // const [searchText, setSearchText] = useState("");
  // console.log("initially: ", searchText);

  const [product, setProducts] = useState([]);
  async function getData() {
    const res = await fetch(`https://dummyjson.com/products/search?q=${searchText}`);
    const data = await res.json();
    setProducts(data.products);
    // console.log("API Called");
  }
  // const handleSearch = (e) => {
  //   const val = e.target.value;
  //   // searchText = val
  //   setSearchText(val);
  // };

useEffect(()=>{
  console.log('text changed!')
  getData()
},[searchText]);

  return (
    <>
      <NavBar setSearchText={setSearchText}/>
      <CatBar Catoge={Catoge} />
      {/* <button onClick={getData}>Get Data</button> */}
      {product.map((elem) => (
        <div key={elem.id} className="card">
          <img src={elem.thumbnail} />

          <div className="">
            <div className="title">{elem.title}</div>
            <div class="rating">
              <span>Rating: </span>
              <span>({elem.rating})</span>
            </div>
            <div className="price">$ {elem.price}</div>
            <div className="original-price">M.R.P.: {elem.price + 10}</div>
            <div className="discount">(50% off)</div>
            <div className="delivery">FREE delivery Sun, 7 Jul</div>
            <div className="prime">
              <span>prime</span>
            </div>
            <div className="add-to-cart">Add to cart</div>
            <div className="more-buying-choices">
              More Buying Choices
              <a href="#"> ${elem.price} (5 new offers)</a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SearchPage;
