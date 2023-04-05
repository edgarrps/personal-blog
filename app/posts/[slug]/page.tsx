import getPostMetadata from '@/components/getPostMetadata'
import fs from 'fs'
import matter from 'gray-matter'
import Markdown from 'markdown-to-jsx'

const getPostContent = (slug: string) => {
    const file = `posts/${slug}.md`
    const content = fs.readFileSync(file, 'utf8')
    const matterResult = matter(content)
    return matterResult
} 

export const generateStaticParams = async () => {
    const posts = getPostMetadata()
    return posts.map((post) => ({
        slug: post.slug
    }))
}

const PostPage = (props: any) => {
    const slug = props.params.slug
    const post = getPostContent(slug)
    return (
        <div className='flex flex-col mx-auto space-y-5 pt-20 pb-20 desktop:w-[600px] laptop:w-[600px] tablet:w-[400px] mobile:w-[300px]'>
            <h1 className='font-mono text-center font-bold text-2xl text-stone-200'>{post.data.title}</h1>
            <Markdown className='font-mono text-gray-200 text-justify'>{post.content}</Markdown>
        </div>
    )
}
export default PostPage