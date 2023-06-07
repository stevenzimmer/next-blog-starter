import Link from "next/link"
import getFormattedDate from "@/lib/getFormattedDate";
import { Meta } from "@/types";
type Props = {
  post: Meta
}

export default function ListItem({post}: Props) {
  // console.log({post});
  const {id, title, date} = post;
  const formattedDate = getFormattedDate(date);
  return (
    <div>
      <Link className="underline hover:text-black/70 dark:hover:text-white" href={`/posts/${id}`}>{title}</Link>
      <p>{formattedDate}</p>
    </div>
  )
}
