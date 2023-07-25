import Link from "next/link";

const PostPreview = (props) => {
  return (
    <div className="grid m-2 items-center justify-center shadow-xl rounded-lg rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {console.log(props, 'ldsf')}
      <Link href={`/blog/posts/${props.slug}`}>
        <div class="max-w-sm py-6">
          <img src={props?.img} alt='img' />
          <a href="#">
            <h2 className="font-bold text-gray hover:underline">
              {props.title}
            </h2>
          </a>
          <p className="text-xs text-gray-600">
            {props.date}
          </p>
          <p>
            {props.subtitle}
          </p>
        </div>
      </Link >
    </div>
  )
}

export default PostPreview;