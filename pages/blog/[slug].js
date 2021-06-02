import Head from "next/head";
import { format, parseISO } from "date-fns";
import {getPostSlugs} from "../../lib/data"
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

export default function BlogPost({ title, date, content }) {
  
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h2 className="font-bold text-3xl">{title}</h2>
        <h3 className="text-gray-500">
          {format(parseISO(date), "MMMM do, uuu")}
        </h3>
        <div className="prose">
          <MDXRemote {...content}/>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const allPosts = getPostSlugs()
  const content = allPosts.find((blog) => blog.slug === params.slug)
  const mdxSource = await serialize(content.content);
  return {
    props: {
      date: content.data.date.toISOString(),
      title: content.data.title,
      content: mdxSource
    }
  };
}

export async function getStaticPaths() {
  const allPosts = getPostSlugs()
  return {
    paths: allPosts.map((item) => ({
      params: {
        slug: item.slug,
      },
    })),
    fallback: false,
  };
}
