import fs, { PathLike, ReadStream } from 'fs'
import Link from 'next/link'

const getPostMetadata = () => {
  const folder = 'posts/'
  const files = fs.readdirSync(folder)
  const mdPosts = files.filter((file) => file.endsWith('.md'))
  const slugs = mdPosts.map((file) => file.replace('md', ''))
  return slugs
}
export default function Home() {
  const postMetadata = getPostMetadata()
  const postPreviews = postMetadata.map((slug) => {
    <div>
      <Link href={`./posts/${slug}`}>
        <h2>{slug}</h2>
      </Link>
    </div>
  })
  return (<>{postPreviews}</>)
}
