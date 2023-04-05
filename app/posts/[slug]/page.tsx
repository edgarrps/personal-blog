import fs from 'fs'
import Markdown from 'markdown-to-jsx'

const getPostContent = (slug: string) => {
    const file = `posts/${slug}.md`
    const content = fs.readFileSync(file, 'utf8')
    return content
}
const PostPage = (props: any) => {
    const slug = props.params.slug
    const content = getPostContent(slug)

    return (
        <p>
            <h1>{slug}</h1>
            <Markdown>{content}</Markdown>
        </p>
    )
}
export default PostPage