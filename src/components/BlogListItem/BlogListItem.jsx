import PropTypes from 'prop-types';
import Tag from '../Tag/Tag';
import moment from 'moment';

const BlogListItem = ({ post }) => {
  const { slug, date, title, summary, tags } = post;

  return (
    <li className="py-12">
      <article>
        <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
          <dl>
            <dt className="sr-only">Published on</dt>
            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
            {moment(date).format('YYYY/MM/DD')}

            </dd>
          </dl>
          <div className="space-y-5 xl:col-span-3">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold leading-8 tracking-tight">
                <a
                  href={`/blog/${slug}`}
                  className="text-gray-900 dark:text-gray-100"
                >
                  {title}
                </a>
              </h2>
              <div className="flex flex-wrap">
                {tags.map((tag) => (
                  <Tag key={tag} text={tag} />
                ))}
              </div>
              <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                {summary}
              </div>
            </div>
            <a
              href={`/blog/${slug}`}
              className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`Read "${title}"`}
            >
              Read more &rarr;
            </a>
          </div>
        </div>
      </article>
    </li>
  );
};


BlogListItem.propTypes = {
    post: PropTypes.shape({
      slug: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date).isRequired, // Expecting a Date object now
      title: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string.isRequired)
    }).isRequired
  };

export default BlogListItem;
