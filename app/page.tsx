import fs from 'fs'
import Link from 'next/link'

const getPosts = () => {
    const posts = fs.readdirSync('posts/')
    const files = posts.filter((file) => file.endsWith('.md'))
    const printFiles = files.map((file) => file.replace('.md', ''))
    return printFiles
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