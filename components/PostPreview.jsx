import Image from "next/image";
import Link from "next/link";

const PostPreview = (props) => {
  return (
    <Link href={`/blog/posts/${props.slug}`}>
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 px-10">
        <Image className="object-fit rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/images/physical_image.jpg" alt="" width={500} height={500} />
        {/* <img src={props?.img} alt='img' /> */}
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> {props.subtitle}</p>
          <p>{props.date}<span className="ms-4">3 hour ago</span></p>
        </div>
      </div>
    </Link >
  )
}

export default PostPreview;