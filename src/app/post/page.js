import MyBtn from "./myBtn";

async function getPosts() {
  let postData = await fetch("https://jsonplaceholder.typicode.com/posts")
  postData = await postData.json()
  return postData;
}

const Post = async () => {
  let post = await getPosts()
  console.log(post);

  return (
    <>
      <h2>Posts | Fetch API with SErver SIde Rendering</h2>
      {
        post.map((post) =>
          <>
            <h4 key={post.id}>Post Title : {post.title}</h4>
            <MyBtn data={post.id} />
          </>
        )
      }
    </>
  )
}

export default Post;