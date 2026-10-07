import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/postsSlice";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import "./Detail.css";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(fetchPosts());
    }
  }, [dispatch, posts.length]);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="detail-container">
        <ErrorMessage message="Post not found!" />
        <Link to="/" className="back-link">
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <Link to="/" className="back-link">
        ← Back to Home
      </Link>
      <div className="detail-card">
        <img
          src={`https://picsum.photos/400?random=${post.id}`}
          alt={post.title}
          className="detail-img"
        />
        <div className="detail-content">
          <span className="user-badge">User ID: {post.userId}</span>
          <h1 className="detail-title">{post.title}</h1>
          <p className="detail-body">{post.body}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;