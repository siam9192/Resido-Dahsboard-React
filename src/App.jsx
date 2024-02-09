import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import YouTube from 'react-youtube'
import axios from 'axios'


function App() {
  const [count, setCount] = useState(0)
  const [video,setVideo] = useState(null);
  useEffect(()=>{
    axios.get(`http://localhost:5000/video?url=${encodeURIComponent('https://www.youtube.com/watch?v=Ji_HOZgoRBI')}`,{responseType:'blob'})
    .then(res =>{
      // const url = window.URL.createObjectURL(new Blob([res.data]));
      setVideo(res.data)
      // console.log('url',url)
      // setVideo(url)
      console.log(res.data)
      console.log('vihhh',URL.createObjectURL(video))
    })
  },[])
  console.log(video)
  
  return (
    <div>

      <YouTube videoId={'TSttuuXoSdc'}></YouTube>
    {
      video &&   <video controls width="640" height="360">
      <source src={URL.createObjectURL(video)}  type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    }

    </div>
  
  )
}

export default App
