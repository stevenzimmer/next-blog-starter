import Link from "next/link";
import { getSortedPostsData, getPostData } from "@/lib/post";
import getFormattedDate from "@/lib/getFormattedDate";
import {notFound} from "next/navigation";
type Params = {
  params: {
    postId: string
  }
}

export function generateMetadata({params}: Params) {

  const posts = getSortedPostsData(); // deduped... "Request data where you need it"
  const {postId } = params;

  const post = posts.find(post => post.id === postId);

  if(!post) {
    return {
      title: "Post not found"
    }
  }
  return {
    title: `${post.title} | Zim Blog`
  }

}

export default async function BlogPostPage({params}: Params) {

  const posts = getSortedPostsData(); // deduped... "Request data where you need it"
  const {postId } = params;

  if(!posts.find(post => post.id === postId)) {
    return notFound()
  }

  const  { title, date, contentHtml} = await getPostData(postId);

  const pubDate = getFormattedDate(date);
  return (
    <main>
      <h1>{title}</h1>
      <p>
        {pubDate}
      </p>
      <article>
        <section dangerouslySetInnerHTML={{__html
        : contentHtml}} />

        <p>
          <Link href="/">Back to home</Link>
        </p>
      </article>
      </main>
  )
}
