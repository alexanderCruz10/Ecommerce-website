import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";
import ProductCards from "./ProductCards";
import Pagination from "./Pagination";
import productData from "../../products.json";
import Search from "./Search";
import ShopCategory from "./ShopCategory";
import PopularPost from "./PopularPost";
import Tags from "./Tags";

const showResult = "Showing 01 - 12 of 139 Results";

const Shop = () => {
  const [gridList, setGridList] = useState(true);
  const [products, setProducts] = useState(productData);
  // pagination
  // Get current products to display
  const [currentPage, setCurrentPage] = useState(1);
  //filter products based on category
  const [selectedCategory, setSelectedCategory] = useState("All");

  const productsPerPage = 12; // Number of products per page

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  // Function to change the current page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const menuItems = [...new Set(productData.map((Val) => Val.category))];
  const filterItem = (curcat) => {
    const newItem = productData.filter((newVal) => {
      return newVal.category === curcat;
    });
    setSelectedCategory(curcat);
    setProducts(newItem);
    // console.log(selectedCategory)
  };

  return (
    <div>
      <PageHeader title={"Our Shop Pages"} curPage={"Shop"} />

      {/* shop page */}
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            {/* left side */}
            <div className="col-lg-8 col-12">
              <article>
                {/* layout and title here */}
                <div className="shop-title d-flex flex-wrap justify-content-between">
                  <p>{showResult}</p>
                  <div
                    className={`product-view-mode ${
                      gridList ? "gridActive" : "listActive"
                    }`}
                  >
                    <a className="grid" onClick={() => setGridList(!gridList)}>
                      <i className="icofont-ghost"></i>
                    </a>
                    <a className="list" onClick={() => setGridList(!gridList)}>
                      <i className="icofont-listine-dots"></i>
                    </a>
                  </div>
                </div>

                {/* product cards */}
                <div>
                  <ProductCards GridList={gridList} product={currentProducts} />
                </div>
                <Pagination
                  productsPerPage={productsPerPage}
                  totalProducts={products.length}
                  paginate={paginate}
                  activePage={currentPage}
                />
              </article>
            </div>

            {/* right side */}
            <div className="col-lg-4 col-12">
              <aside>
                <Search products={products} />
                {/* ShopCategory */}
                <ShopCategory filterItem={filterItem} menuItems={menuItems} setProducts={setProducts} 
                selectedCategory={selectedCategory}/>

                <PopularPost/>
                <Tags/>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
