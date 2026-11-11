import photo1 from "../assets/images/post-1.jpg";
import photo2 from "../assets/images/post-2.jpg";
import photo3 from "../assets/images/post-3.jpg";
const postList = [
  {
    image: photo1,
    content: "First Time Home Owner Ideas",
    owner: " Kristin Watson ",
    date: "Dec 19, 2021",
  },
  {
    image: photo2,
    content: "How To Keep Your Furniture Clean",
    owner: " Robert Fox ",
    date: " Dec 15, 2021",
  },
  {
    image: photo3,
    content: "Small Space Furniture Apartment Ideas",
    owner: " Kristin Watson ",
    date: "Dec 12, 2021",
  },
];

export function Postcard({posts}){
return(<>
{posts.map((post,index)=>{
    return <div className="col-sm-6 col-md-4 py-4" key={index}>
            <img src={post.image} alt="post1" className="postImage"/>
            <strong className="d-block pt-4">
              {post.content}
            </strong>
            <span className="text-black-50 py-4">
              by{" "}
              <a href="#" className="text-black">
                <strong>{post.owner}</strong>
              </a>{" "}
              on{" "}
              <a href="#" className="text-black">
                <strong> {post.date}</strong>
              </a>
            </span>
          </div>
})}
</>)
}
function Post() {
  return (
    <section className="blog bg-backgroundColor">
      <div className="container">
        <div className="blog-content d-flex justify-content-between py-4">
          <h3 className="h-3">Recent Blog</h3>
          <a className="text-black" href="#">
            View All Posts
          </a>
        </div>
        <div className="row">
          <Postcard posts={postList}/>
        </div>
      </div>
    </section>
  );
}

export default Post;
