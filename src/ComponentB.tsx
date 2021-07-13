import { useEffect, useState } from "react"
import ComponentA from "./ComponentA"
import findPerson from "./findPerson"

const ComponentB: React.FC<{ id: string }> = ({ id }) => {
  const [name, setName] = useState<string>('')
  
  useEffect(() => {
    const fetchPerson = async () => {
      const person = await findPerson(id)
      setName(person.name)
    }
    fetchPerson()
  }, [id])

  return (
    <div className="component-wrapper">
      <code className="component-label">Component B</code>
      <p>
        finding person with id {id}
      </p>
      <ComponentA name={name}/>
    </div>
  )
}

export default ComponentB