import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import { PostMetadata } from '@/types/PostMetadata'

const getPosts = (): PostMetadata[] => {
    const files = fs.readdirSync('posts/')
    const markdownPosts = files.filter((file) => file.endsWith('.md'))
    const posts = markdownPosts.map((fileName) => {
        const fileContents = fs.readFileSync(`posts/${fileName}`, 'utf8')
        const matterResult = matter(fileContents)

        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            subtitle: matterResult.data.subtitle,
            slug: fileName.replace('.md', '')
        }
    })
    return posts
}

export default function Home() {
    const postMetadata = getPosts()
    const postPreviews = postMetadata.map((post) => (
        <div>
            <Link href={`/posts/${post.slug}`}>
                <h2>{post.title}</h2>
            </Link>
            <p>{post.subtitle}</p>
            <p>{post.date}</p>
        </div>
    ))
    return <div>{postPreviews}</div>
}