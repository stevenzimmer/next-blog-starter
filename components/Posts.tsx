import { getSortedPostsData } from "@/lib/post"
import ListItem from "./ListItem";
export default function Posts() {

  const posts = getSortedPostsData();
  
  return (
    <section className="py-6 mx-auto max-w-2xl">
      <h2 className="text-4xl font-bold dark:text-white/90">
        Blog
      </h2>
      <ul className="w-full">
        {posts.map((post) => (
          <li key={post.id} className="py-6 border-b last:border-transparent">
            <ListItem key={post.id} post={post} />
          </li>
        ))}
      </ul>
    </section>
  )
}
