import Layout from '../components/Layout'
import useSwr from 'swr'
import axios from 'axios'
import Comment from '../components/Comment'
import { COMMENT } from '../types/Types'

const axiosFetcher = async () => {
  const res = await axios.get<COMMENT[]>(
    'https://jsonplaceholder.typicode.com/comments?_limit=10'
  )
  return res.data
}
const CommentPage: React.FC = () => {
  const { data: comments, error } = useSwr('commentsFetch', axiosFetcher)

  if (error) return <span>Error!</span>

  return (
    <Layout title="Comment">
      <p className="text-4xl m-10">Comment page</p>
      <ul>
        {comments &&
          comments.map((comment) => <Comment key={comment.id} {...comment} />)}
      </ul>
    </Layout>
  )
}
export default CommentPage
