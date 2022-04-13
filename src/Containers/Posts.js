import Post from "../Components/Post";


const Posts = (props) => {
let  x = 5;
  const postList = props.posts.map(post => {
      
    return <Post
       id = {post.id}
       title = {post.title}
       author = {post.author}
       key = {post.id}
      />
    });

    return (<div className="posts">
        {postList}
    
        </div>
    );
}

export default Posts;