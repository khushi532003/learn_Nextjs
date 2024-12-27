"use client"
const Post = ({params}) => {
  return (
    <>
    {/* catch all segments */}
    <div>Post : {params.post[0]}</div>
    <div>Post : {params.post[1]}</div>
      </>
  )
}

export default Post