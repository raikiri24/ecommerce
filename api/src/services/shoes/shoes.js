import { db } from 'src/lib/db'

export const shoes = () => {
  return db.shoe.findMany()
}

export const shoe = ({ id }) => {
  return db.shoe.findUnique({
    where: { id },
  })
}

export const createShoe = ({ input }) => {
  return db.shoe.create({
    data: input,
  })
}

export const updateShoe = ({ id, input }) => {
  return db.shoe.update({
    data: input,
    where: { id },
  })
}

export const deleteShoe = ({ id }) => {
  return db.shoe.delete({
    where: { id },
  })
}
