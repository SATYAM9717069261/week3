
import { useEffect, useState } from 'react'
import Profileconatiner from './mainpage/Profilecontainer';
export default function Home({ prop }) {
  const [searchResult, setsearchResult] = useState([])
  const [profile, setprofile] = useState(prop.data)
  const searchHandler = (searchterm) => {
    if (searchterm !== "") {
      const newprofile = profile.filter((data) => {
        return Object.values(data).join(" ").toLowerCase().includes(searchterm.toLowerCase()) ;
      })
      console.log("New Profile +> ", newprofile);
      setsearchResult(newprofile)
    }else{
      setsearchResult(profile)
    }
  }

  return (
    <Profileconatiner  term={searchResult.length < 1 ? profile : searchResult} searchkeyword={searchHandler} />
  )
  
}

export async function getStaticProps() {
  const response = await fetch(process.env.baseurl.profile);
  const data = await response.json();
  return {
    props: { prop: data }
  }
}
