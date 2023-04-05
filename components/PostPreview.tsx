import { PostMetadata } from "@/types/PostMetadata"
import Link from "next/link"

export default function PostPreview(props: PostMetadata) {
    return (
        <div className='w-[300px] text-center shadow-md rounded-xl hover:shadow-xl ease-in-out duration-300 bg-cyan-200'>
            <Link href={`/posts/${props.slug}`}>
                <h2 className='font-bold hover:text-blue-600'>{props.title}</h2>
            </Link>
            <p>{props.subtitle}</p>
            <p>{props.date}</p>
        </div>
    )
}