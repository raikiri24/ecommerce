import { shoes, shoe, createShoe, updateShoe, deleteShoe } from './shoes'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('shoes', () => {
  scenario('returns all shoes', async (scenario) => {
    const result = await shoes()

    expect(result.length).toEqual(Object.keys(scenario.shoe).length)
  })

  scenario('returns a single shoe', async (scenario) => {
    const result = await shoe({ id: scenario.shoe.one.id })

    expect(result).toEqual(scenario.shoe.one)
  })

  scenario('creates a shoe', async () => {
    const result = await createShoe({
      input: { barcode: 'String', size: 5193315, imagePath: 'String' },
    })

    expect(result.barcode).toEqual('String')
    expect(result.size).toEqual(5193315)
    expect(result.imagePath).toEqual('String')
  })

  scenario('updates a shoe', async (scenario) => {
    const original = await shoe({ id: scenario.shoe.one.id })
    const result = await updateShoe({
      id: original.id,
      input: { barcode: 'String2' },
    })

    expect(result.barcode).toEqual('String2')
  })

  scenario('deletes a shoe', async (scenario) => {
    const original = await deleteShoe({ id: scenario.shoe.one.id })
    const result = await shoe({ id: original.id })

    expect(result).toEqual(null)
  })
})
