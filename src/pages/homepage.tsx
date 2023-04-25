import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [aState, setAState] = useState("some thing");

  useEffect(() => {
    setTimeout(() => {
      setAState("something else1")
    }, 5000)
  })
  return (
    <div>{aState}</div>
  )
}

export default HomePage;
