"use client"

const MyBtn = ({ data }) => {
  return (
    <>
      <button className="bg-gray-500 text-white px-4 py-1 " onClick={() => alert(data)}>Click Me</button>
    </>
  )
}

export default MyBtn;