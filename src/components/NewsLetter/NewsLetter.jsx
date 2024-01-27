
const NewsletterSubscription = () => {
  return (
    <div className="p-6 flex justify-center items-center">
      <div className="flex flex-row sm:flex-row sm:w-full gap-4 max-w-md w-full">
        <label htmlFor="email" className="sr-only">Email address</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 border border-transparent text-gray-900 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-pink-600 text-white font-semibold rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
