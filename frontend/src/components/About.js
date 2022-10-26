import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';
function About() {
  const navigate = useNavigate();
  const callAboutpage = async () => {
    try {
      const res = await fetch('/about', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      })
      const data = await res.json();

      console.log("🚀 ~ file: About.js ~ line 16 ~ callAboutpage ~ data", data)

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }

    }
    catch (err) {
      console.log("🚀 ~ file: About.js ~ line 10 ~ callAboutpage ~ err", err)
      navigate('/login')
    }
  }
  useEffect(() => {
    callAboutpage();
  }, [])

  return (
    <>
      <Navbar />
      <div>About pag</div>
    </>
  )
}

export default About