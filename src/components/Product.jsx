import product1 from "../assets/images/product-1.png";
import product2 from "../assets/images/product-2.png";
import product3 from "../assets/images/product-3.png";
const productList=[
  {image:product1,productName:"Nordic Chair",price:"50.00"},
  {image:product2,productName:"Kruzo Aero Chair",price:"78.00"},
  {image:product3,productName:"Ergonomic Chair",price:"43.00"}
]
export function ProductCard({data}){
return <>
  {data.map((product,index)=>{
    return <div className="product-card col-12 col-md-4 col-lg-3 mb-5" key={index}>
            <img src={product.image} alt="product1" />
            <span>{product.productName}</span>
            <strong>${product.price}</strong>
            <i className="bi bi-plus-circle-fill "></i>
          </div>
  })}
</>
}
function Product() {
  return (
    <section className="product py-5 bg-backgroundColor">
      <div className="container pt-5">
        <div className="row">
          <div className="product-content col-md-12 col-lg-3 mb-5 mb-lg-0">
            <h3 className="h-3">Crafted with excellent material.</h3>
            <p className="text-black-50">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <button className="btn btn-dark">Explore</button>
          </div>
          <ProductCard data={productList}/>
        </div>
      </div>
    </section>
  );
}
export default Product;
