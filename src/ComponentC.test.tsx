import { fireEvent, render, RenderResult } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import ComponentC from './ComponentC'
import findPerson from './findPerson'
import { getRandomString } from './testUtils'
jest.mock('./findPerson', () => ({
  __esModule: true,
  default: jest.fn()
}))

describe('ComponentC', () => {
  describe('when I type in the input', () => {
    // Unit test for ComponentC
    it('displays what I type in the input', async () => {
      const id = getRandomString()
      const name = getRandomString();
      (findPerson as jest.Mock).mockImplementation(() => Promise.resolve({ name }))
      const { getByPlaceholderText } = render(<ComponentC/>)
      const input = getByPlaceholderText('abc123')
      await act(async () => {
        fireEvent.change(input, { target: { value: id } })
      })
      expect((input as HTMLInputElement).value).toBe(id)
    })
    // Integration test of C and B
    it('has a child that fetches the person with the id I typed', async () => {
      /* === BEGINNING OF C UNIT TEST ===*/
      const id = getRandomString()
      const name = getRandomString();
      (findPerson as jest.Mock).mockImplementation(() => Promise.resolve({ name }))
      const { getByPlaceholderText } = render(<ComponentC/>)
      const input = getByPlaceholderText('abc123')
      await act(async () => {
        fireEvent.change(input, { target: { value: id } })
      })
      // === END OF B UNIT TEST === //
      expect(findPerson).toHaveBeenCalledWith(id)
    })
  })
    // Integration test of C, B and A
    it('matches it`s snapshot', async () => {
      const name = 'Snapshot name';
      (findPerson as jest.Mock).mockImplementation(() => Promise.resolve({ name }))
      let renderResult = {} as RenderResult;
      await act(async () => {
        renderResult = render(<ComponentC/>)
      })
      expect(renderResult.asFragment()).toMatchSnapshot()
    })
})