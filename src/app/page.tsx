'use client'
import neynarClient from "@/clients/neynar";
import { FeedType, FilterType } from "@neynar/nodejs-sdk";
import { Casts } from "@/components/Casts";
import Spline from '@splinetool/react-spline';
import { CardContainer } from "@/components/CardContainer";

import { ProjectContainer } from "@/components/ProjectContainer";
import { projects, categories } from "../data";





export default async function Home() {

  

  const BackgroundSpline = () => (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      width: '100%',
      height: '100%',
      zIndex: -1, 
    }}>
    <Spline scene="https://prod.spline.design/wON500KD3r3vZ2s7/scene.splinecode" />

    </div>
  );


  return <div>
        {/* <BackgroundSpline /> */}
        <CardContainer data={categories} />
        <ProjectContainer data={projects} />
    {/* {feed && <Casts feed={feed.feed.casts} />} */}
    
    </div>;
}

// async function getFeed() {
//   const feed = await neynarClient.fetchFeed(FeedType.Filter, {
//     filterType: FilterType.GlobalTrending,
//     withReplies: false,
//   });

//   return { feed };
// }
