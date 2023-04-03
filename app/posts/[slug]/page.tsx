const PostPage = (props: any) => {
    const slug = props.params.slug
    return (
        <p>
            <h1>Post! {slug}</h1>
        </p>
    )
}
export default PostPage