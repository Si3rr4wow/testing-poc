import { useParams } from "react-router-dom"
import ComponentB from "./ComponentB"

const ComponentD: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <div className="component-wrapper">
      <code className="component-label">
        <h1>
          Component D
        </h1>
        <p>
          This component grabs a person's id from a url param
        </p>
        <p>
          This component has a child which finds a person given an id
        </p>
      </code>
      <p>
        The ID in the url is {id}
      </p>
      <ComponentB id={id}/>
    </div>
  )
}

export default ComponentD