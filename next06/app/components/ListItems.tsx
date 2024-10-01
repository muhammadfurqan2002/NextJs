import getFormattedDate from "@/lib/getFormattedDate";
import Link from "next/link";

type Props={
    blogPost:BlogPost,
}

export default function ListItems({blogPost}:Props) {
    const {id,date,title}=blogPost;
    const newDate=getFormattedDate(date);
  return (
    <li className="mt-4 text-2xl dark:text-white/90" key={id}>
        <Link className="underline hover:text-black/70 dark:hover:text-white" href={`/posts/${id}`}>{title}</Link>
        <br />
        <p className="text-sm mt-1">{newDate}</p>
    </li>
  )
}
