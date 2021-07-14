import findPerson from './findPerson'
import { getRandomString } from './testUtils'

describe('findPerson', () => {
  describe('given no id', () => {
    it('returns a person with no name', async () => {
      const person = await findPerson('')
      expect(person.name).toBeFalsy()
    })
  })
  describe('given an id', () => {
    it('returns a person with a name', async () => {
      const id = getRandomString()
      const person = await findPerson(id)
      expect(person.name).toBeTruthy()
    })
  })
})