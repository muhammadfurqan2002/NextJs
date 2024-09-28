import getUser from "@/lib/getUser";
import getUserPost from "@/lib/getUserPost";
import { Suspense } from "react";
import UserPost from "./components/UserPost";
import { Metadata} from "next";
import getAllUsers from "@/lib/getAllUsers";
import { notFound } from "next/navigation";


type Params = {
    params: {
      userId: string;
    };
  };


//   creating dynamic meta data using http request

export  async function generateMetadata({params:{userId}}:Params,):Promise<Metadata>{
    const userData: Promise<User> = getUser(userId);
    const user:User=await userData;
  if(!user.name){
    return {
      title:"User not found!"
    }
  }
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
if(!user.name) return notFound();
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



// performing SSG we using static parmas for pre pages rendering
export async function generateStaticParams() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;
  return users.map((user) => ({ userId: user.id.toString() }));
}
