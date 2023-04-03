import fs from 'fs'
import Link from 'next/link'

const getPosts = () => {
    const files = fs.readdirSync('posts/')
    const markdownPosts = files.filter((file) => file.endsWith('.md'))
    const slugs = markdownPosts.map((file) => file.replace('.md', ''))
    return slugs
}

export default function Home() {
    const postMetadata = getPosts()
    const postPreviews = postMetadata.map((slug) => (
        <div>
            <Link href={`/posts/${slug}`}>
                <h2>{slug}</h2>
            </Link>
        </div>
    ))
    return <div>{postPreviews}</div>
}