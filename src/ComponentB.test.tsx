import { render, screen } from '@testing-library/react'
import ComponentB from './ComponentB'
import { getRandomString } from './testUtils'
import findPerson from './findPerson'
import { act } from 'react-dom/test-utils'
jest.mock('./findPerson', () => ({
  __esModule: true,
  default: jest.fn()
}))

describe('ComponentB', () => {
  describe('given an id', () => {
    // Unit test for ComponentB
    it('fetches a person with that id', async () => {
      const id = getRandomString()
      const name = getRandomString();
      (findPerson as jest.Mock).mockImplementationOnce(() => Promise.resolve({ name }))
      await act(async () => {
        render(<ComponentB id={id}/>)
      })
      expect(findPerson).toHaveBeenCalledTimes(1)
      expect(findPerson).toHaveBeenCalledWith(id)
    })
    // Integration test of A and B
    it('renders a child that displays the persons name', async () => {
      /* === BEGINNING OF B UNIT TEST ===*/
      const id = getRandomString()
      const name = getRandomString();
      (findPerson as jest.Mock).mockImplementationOnce(() => Promise.resolve({ name }))
      // this async render is used to resolve the promises
      // which are instantiated when the component mounts
      await act(async () => {
        render(<ComponentB id={id}/>)
      })
      // === END OF A UNIT TEST === //
      const childComponent = screen.getByText(new RegExp(name))
      expect(childComponent).toBeVisible()
    })
  })
})