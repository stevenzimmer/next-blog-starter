
import Posts from "@/components/Posts"
export const revalidate = 10; // revalidate this page every 60 seconds

export default function Home() {
  return (
      <Posts />
  )
}
