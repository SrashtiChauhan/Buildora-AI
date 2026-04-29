import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import API_URL from "../config";

function WebsiteViewer() {
  const { slug } = useParams();
  const [website, setWebsite] = useState(null);

  useEffect(() => {
    const fetchWebsite = async () => {
      try {
        const res = await axios.get(
          `${API_URL}/api/website/getbyslug/${slug}`
        );

        setWebsite(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchWebsite();
  }, [slug]);

  if (!website) return <div>Loading...</div>;

  return (
    <iframe
      srcDoc={website.latestCode}
      className="w-full h-screen border-none"
      title="website"
    />
  );
}

export default WebsiteViewer;