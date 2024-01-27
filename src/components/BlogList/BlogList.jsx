import BlogListItem from '../BlogListItem/BlogListItem';
import NewsletterSubscription from '../NewsLetter/NewsLetter';
import PropTypes from 'prop-types';

const MAX_DISPLAY = 5

const BlogList = ({ posts }) => {
  return (
    <div className='bg-white text-black antialiased dark:bg-gray-950 dark:text-white px-[1.5rem] sm:px-[2rem] md:px-[8rem] lg:px-[10rem] '>

   <div className="space-y-2 pb-8 pt-6 md:space-y-5">
     <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
       Latest
     </h1>
     <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
       {/* {siteMetadata.description} */}
       A blog created with React and Tailwind.css
     </p>
   </div>

      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {!posts.length && 'No posts found.'}
        {posts.slice(0, MAX_DISPLAY).map((post) => (
          <BlogListItem key={post.slug} post={post} />
        ))}
      </ul>
      {posts.length > MAX_DISPLAY && (
   <div className="flex justify-end text-base font-medium leading-6">
     <a
       href="/blog"
       className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
       aria-label="All posts"
     >
       All Posts &rarr;
     </a>
   </div>
 )}
      <div className="flex items-center justify-center pt-4">
        <NewsletterSubscription />
      </div>
    </div>
  );
};

BlogList.propTypes = {
    posts: PropTypes.arrayOf(
      PropTypes.shape({
        slug: PropTypes.string.isRequired,
        date: PropTypes.instanceOf(Date).isRequired,
        title: PropTypes.string.isRequired,
        summary: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string)
      })
    ).isRequired
  };

export default BlogList;




