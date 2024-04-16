// Write your code here
import "./index.css"
const Message = props => {
  const {content} = props
  return <h1 className="page-content">{content}</h1>
}

export default Message
