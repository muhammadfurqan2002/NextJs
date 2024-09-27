import getUser from "@/lib/getUser";
import getUserPost from "@/lib/getUserPost";
import React, { Suspense } from "react";
import UserPost from "./components/UserPost";
import { Metadata, ResolvingMetadata } from "next";


type Params = {
    params: {
      userId: string;
    };
  };


//   creating dynamic meta data using http request

export  async function generateMetadata({params:{userId}}:Params,  parent: ResolvingMetadata):Promise<Metadata>{
    const userData: Promise<User> = getUser(userId);
    const user:User=await userData;
  return {
    title:user.name,
    description:`This is page of ${user.name}`
  }  
}

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const userPosts: Promise<Post[]> = getUserPost(userId);

//   const [user, posts] = await Promise.all([userData, userPosts]);

const user=await userData;
  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPost promise={userPosts} />
      </Suspense>
    </>
  );
}
