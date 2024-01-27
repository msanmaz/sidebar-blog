import BlogList from './components/BlogList/BlogList'
import Navbar from './components/Navbar/Navbar'
import posts from './data/posts'

function App() {

  return (
    <>
    <Navbar/>
    <BlogList posts={posts}/>
    </>
  )
}

export default App



