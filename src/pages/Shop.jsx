import { ProductCard } from "../components/Product";
import product1 from "../assets/images/product-1.png";
import product2 from "../assets/images/product-2.png";
import product3 from "../assets/images/product-3.png";
import Footer from "../components/Footer";
const productList = [
   { image: product3, productName: "Ergonomic Chair", price: "43.00" },
  { image: product1, productName: "Nordic Chair", price: "50.00" },
  { image: product2, productName: "Kruzo Aero Chair", price: "78.00" },
  { image: product3, productName: "Ergonomic Chair", price: "43.00" },
   { image: product3, productName: "Ergonomic Chair", price: "43.00" },
  { image: product1, productName: "Nordic Chair", price: "50.00" },
  { image: product2, productName: "Kruzo Aero Chair", price: "78.00" },
  { image: product3, productName: "Ergonomic Chair", price: "43.00" },
];
function Shop() {
  return (
    <div className="shop-page">
      <div className="bg-primary hero-heading py-5">
        <div className="container py-md-5">
          <h1>Shop</h1>
        </div>
      </div>
      <div className="bg-backgroundColor pt-5" style={{paddingBottom:150}}>
        <div className="container mb-5">
          <div className="row mb-5">
            <ProductCard data={productList} />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Shop;
