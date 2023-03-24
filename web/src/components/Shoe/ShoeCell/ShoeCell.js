import Shoe from 'src/components/Shoe/Shoe'

export const QUERY = gql`
  query FindShoeById($id: Int!) {
    shoe: shoe(id: $id) {
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

export const Empty = () => <div>Shoe not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ shoe }) => {
  return <Shoe shoe={shoe} />
}
