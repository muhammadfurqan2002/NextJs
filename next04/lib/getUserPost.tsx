// type PropsType={
//     userId:string|number,
// }
// here we are going to perfom caching
export default async function getUserPost(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    { next: { revalidate: 60 } } //cache:"force-cache" cache:"no-store"
  );
  if (!res.ok){ undefined;}

  return res.json();
}
