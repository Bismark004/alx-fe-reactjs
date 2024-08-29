import { useQuery } from "react-query";

const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if(!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}; 

const PostsComponent = () => {
    const {data, error, isLoading, isError} = useQuery('posts', fetchPosts);

    if(isLoading) {
        return <div>Loading...</div>

    }

    if(isError) {
        return <div>{error.message}</div>

    }

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {data.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );


};
export default PostsComponent;