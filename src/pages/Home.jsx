import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/postsSlice";
import PostCard from "../components/PostCard";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    if (posts.length === 0) {
      dispatch(fetchPosts());
    }
  }, [dispatch, posts.length]);

  if (loading) return <Loader />;
  if (error)
    return (
      <ErrorMessage
        message={error}
        onRetry={() => dispatch(fetchPosts())}
      />
    );

  return (
    <div className="home-container">
      <h1 className="home-heading">📝 Posts Feed</h1>
      <div className="post-grid">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;