import { ChangeEventHandler, useState } from 'react'
import ComponentB from "./ComponentB"

const ComponentC: React.FC = () => {
  const [id, setId] = useState<string>('')

  const handleValueChange: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => setId(value)

  return (
    <div className="component-wrapper">
      <code className="component-label">
        <h1>
          Component C
        </h1>
        <p>
          This component has an input where users can enter a person's id
        </p>
        <p>
          This component has a child which finds a person given an id
        </p>
      </code>
      <div>
        <label htmlFor="id-input">Enter a person's ID: </label>
        <input id="id-input" value={id} onChange={handleValueChange} placeholder="abc123"/>
      </div>
      <ComponentB id={id}/>
    </div>
  )
}

export default ComponentC