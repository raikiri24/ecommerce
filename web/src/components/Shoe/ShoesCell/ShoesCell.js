import { Link, routes } from '@redwoodjs/router'

import Shoes from 'src/components/Shoe/Shoes'

export const QUERY = gql`
  query FindShoes {
    shoes {
      id
      barcode
      name
      size
      imagePath
      color
      description
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No shoes yet. '}
      <Link to={routes.newShoe()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ shoes }) => {
  return <Shoes shoes={shoes} />
}
