const ComponentA: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className="component-wrapper">
      <code className="component-label">Component A</code>
      <p>
        The person's name is {name}
      </p>
    </div>
  )
}

export default ComponentA