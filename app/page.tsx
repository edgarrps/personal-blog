import fs, { PathLike, ReadStream } from 'fs'

const getPostMetadata = () => {
  const folder = 'posts/'
  const files = fs.readFileSync(folder)
  const mdPosts = files.filter((file: any) => file.endsWith('.md'))
  const slugs = mdPosts.map((file: any) => file.replace('md', ''))
  return slugs
}
export default function Home() {
  const postMetadata = getPostMetadata()
  const postPreviews = postMetadata.map((slug) => { <div><h2>{slug}</h2></div> })
  return (<>{postPreviews}</>)
}
