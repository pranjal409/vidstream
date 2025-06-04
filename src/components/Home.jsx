import React from 'react';
import Sidebar from "./Sidebar.jsx";
import Video from "./Video";
import {useAuth} from "../context/AuthProvider.jsx"
import { ListItem } from '@mui/material';
import ListItems from './ListItems.jsx';

function Home() {
  const {data, loading}=useAuth();
  console.log(data);
  return (
    
    <div className="flex mt-14">
      <Sidebar/>
      <div className="h-[calc(100vh-1rem)] overflow-y-scroll overflow-x-hidden ">
        <ListItems/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-5">
        {   !loading && data.map((item)=>{
            if(item.type!=="video") return false;
            return(
            <Video key={item.id} video={item?.video}/>
            );
        })}
      </div>
    </div>
    </div>
  )
}

export default Home