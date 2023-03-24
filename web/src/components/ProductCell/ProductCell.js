export const QUERY = gql`
  query FindProductQuery($id: Int!) {
    product: shoe(id: $id) {
      id
      barcode
      name
      size
      imagePath
      color
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ product }) => {
  return (
    <div className="flex">
      <div>
        <img src={product.imagePath} alt={product.name} className="h-60" />
      </div>
      <div>
        <p>{product.name}</p>
        <p>{product.barcode}</p>
        <p>Size: {product.size}</p>
      </div>
    </div>
  )
}
