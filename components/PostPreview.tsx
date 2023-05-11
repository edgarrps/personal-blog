import { PostMetadata } from "@/types/PostMetadata"
import Link from "next/link"

export default function PostPreview(props: PostMetadata) {
    return (
        <div className='mx-auto desktop:ml-80 desktop:mr-80 laptop:ml-40 laptop:mr-40 tablet:ml-40 tablet:mr-40 mobile:ml-20 mobile:mr-20 text-center p-5 shadow-md rounded-xl hover:shadow-xl ease-in-out duration-300 bg-purple-200'>
            <Link href={`/posts/${props.slug}`}>
                <h2 className='font-mono uppercase font-bold hover:text-blue-600'>{props.title}</h2>
            </Link>
            <p className='text-sm font-mono font-semibold'>{props.subtitle}</p>
            <p className='text-xs font-mono text-stone-500'>{props.date}</p>
        </div>
    )
}
