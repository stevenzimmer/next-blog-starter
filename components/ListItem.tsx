import Link from "next/link"
import getFormattedDate from "@/lib/getFormattedDate";
type Props = {
  post: BlogPost
}

export default function ListItem({post}: Props) {
  const {id, title, date} = post;
  const formattedDate = getFormattedDate(date);
  return (
    <div>
      <Link className="underline hover:text-black/70 dark:hover:text-white" href={`/posts/${id}`}>{title}</Link>
      <p>{formattedDate}</p>
    </div>
  )
}
