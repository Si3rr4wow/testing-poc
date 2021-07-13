import { ChangeEventHandler, useState } from 'react'
import ComponentB from "./ComponentB"

const ComponentC: React.FC = () => {
  const [id, setId] = useState<string>('')

  const handleValueChange: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => setId(value)

  return (
    <div className="component-wrapper">
      <code className="component-label">Component C</code>
      <div>
        <label htmlFor="id-input">Enter a person's ID: </label>
        <input id="id-input" value={id} onChange={handleValueChange} placeholder="abc123"/>
      </div>
      <ComponentB id={id}/>
    </div>
  )
}

export default ComponentC