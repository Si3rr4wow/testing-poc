const ComponentA: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className="component-wrapper">
      <code className="component-label">
        <h3>
          Component A
        </h3>
        <p>
        This component displays names that are passed to it
        </p>
      </code>
      <p>
        The person's name is {name}
      </p>
    </div>
  )
}

export default ComponentA