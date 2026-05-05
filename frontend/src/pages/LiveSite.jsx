import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import API_URL from "../config";

const LiveSite = () => {
    const [html, setHtml] = useState("")
    const [error, setError] = useState("")
    const {slug} = useParams()
    useEffect(()=>{
          const handleGetWebsite = async()=>{
            try {
                const res = await axios.get(`${API_URL}/api/website/getbyslug/${slug}`, {
                  withCredentials: true    
                });  
                setHtml(res.data.latestCode)          
            } catch (error) {
                console.log(error)
                setError(error.response?.data?.message || "Website not found")
            }
          }
          handleGetWebsite()
    },[slug])

    if (error) {
  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      {error}
    </div>
  )
}
  return (
  <iframe 
  title='Live site' 
  srcDoc={html} 
  className='w-screen h-screen border-none'
  sandbox='allow-scripts allow-same-origin allow-forms'/>
  )
}

export default LiveSite
