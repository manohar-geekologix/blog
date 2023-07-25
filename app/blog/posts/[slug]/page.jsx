import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getPostMetaData from '../../../../components/getPostMetaData';
import Image from 'next/image';

const getPostContent = (slug) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);

  return matterResult;
}

export const generateStaticParams = async () => {
  const posts = getPostMetaData();

  return posts.map((post) => {
    slug: post.slug;
  })
}

const page = ({ params }) => {
  const slug = params.slug;
  const post = getPostContent(slug);
  return (
    <div className='container mx-auto p-4 border border-1'>
      <div className="my-12 text-center">
        <h1 className='text-4xl font-extrabold'>
          {post.data.title}
        </h1>
        <p className='text-slate-400 text-xs mt-2'>
          {post.data.date}
        </p>
        <div>
          <img src={post.data.img} alt="" />
        </div>
      </div>
      <article className='prose-lg '>
        <Markdown>{post.content}</Markdown>
      </article>
    </div>

  )
}

export default page
