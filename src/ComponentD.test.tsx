import { act, render, RenderResult } from '@testing-library/react'
import ComponentD from './ComponentD'
import findPerson from './findPerson'
import { getRandomString } from './testUtils'
import { MemoryRouter, Route } from 'react-router-dom'
jest.mock('./findPerson', () => ({
  __esModule: true,
  default: jest.fn()
}))

const renderComponentD = async (id: string): Promise<RenderResult> => {
  let renderResult = {} as RenderResult;
  await act(async () => {
    renderResult = render(
      <MemoryRouter initialEntries={[`/person/${id}`]}>
        <Route path="/person/:id">
          <ComponentD/>
        </Route>
      </MemoryRouter>
    )
  })
  return renderResult
}

describe('ComponentD', () => {
    // Unit test of ComponentD 
    it('displays the id given by the url', async () => {
      const id = getRandomString()
      const name = getRandomString();
      (findPerson as jest.Mock).mockImplementation(() => Promise.resolve({ name }))
      const { getAllByText } = await renderComponentD(id)
      expect(getAllByText(/id/)[0]).toBeVisible()
    })
  // Integration test of D and B
  it('has a child that fetches the person with the id I typed', async () => {
    /* === BEGINNING OF D UNIT TEST ===*/
    const id = getRandomString()
    const name = getRandomString();
    (findPerson as jest.Mock).mockImplementation(() => Promise.resolve({ name }))
    await renderComponentD(id)
    // === END OF B UNIT TEST === //
    expect(findPerson).toHaveBeenCalledWith(id)
  })
  // Integration test of D, B and A
  it('matches it`s snapshot', async () => {
    const id = 'Snapshot id'
    const name = 'Snapshot name';
    (findPerson as jest.Mock).mockImplementation(() => Promise.resolve({ name }))
    const { asFragment } = await renderComponentD(id)
    expect(asFragment()).toMatchSnapshot()
  })
})