import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'

const getPosts = () => {
    const files = fs.readdirSync('posts/')
    const markdownPosts = files.filter((file) => file.endsWith('.md'))
    const posts = markdownPosts.map((fileName) => {
        const fileContents = fs.readFileSync(`posts/${fileName}`, 'utf8')
        const matterResult = matter(fileContents)
        return {
            tittle: matterResult.data.title,
            date: matterResult.data.date,
            subtitle: matterResult.data.subtitle,
            slug: fileName.replace('.md', '')
        }
    })
}

export default function Home() {
    const postMetadata = getPosts()
    const postPreviews = postMetadata.map((slug:any) => (
        <div>
            <Link href={`/posts/${slug}`}>
                <h2>{slug}</h2>
            </Link>
        </div>
    ))
    return <div>{postPreviews}</div>
}