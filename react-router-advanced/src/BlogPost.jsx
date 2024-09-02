import { useParams } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams();
  return <div>Blog Post ID: {id}</div>;
}
export default BlogPost;