import { render } from "@testing-library/react"
import ComponentA from "./ComponentA"
import { getRandomString } from './testUtils'

describe('ComponentA', () => {
  describe('given a name', () => {
    it('displays the given name', () => {
      const name = getRandomString()
      const { getByText } = render(<ComponentA name={name}/>)
      expect(getByText(new RegExp(name))).toBeVisible()
    })
  })
})