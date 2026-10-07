import { Link } from "react-router-dom";
import "./PostCard.css";

const PostCard = ({ post }) => {
  const shortTitle =
    post.title.length > 40 ? post.title.slice(0, 40) + "..." : post.title;

  const shortBody =
    post.body.length > 100 ? post.body.slice(0, 100) + "..." : post.body;

  return (
    <div className="post-card">
      <img
        src={`https://picsum.photos/200?random=${post.id}`}
        alt={post.title}
        className="post-img"
      />
      <div className="post-content">
        <h3 className="post-title">{shortTitle}</h3>
        <p className="post-body">{shortBody}</p>
        {post.body.length > 100 && (
          <Link to={`/item/${post.id}`} className="read-more">
            Read More...
          </Link>
        )}
      </div>
    </div>
  );
};

export default PostCard;