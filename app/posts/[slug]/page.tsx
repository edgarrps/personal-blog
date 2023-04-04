import fs from 'fs'

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
            <h1>Post! {slug}</h1>
        </p>
    )
}
export default PostPage