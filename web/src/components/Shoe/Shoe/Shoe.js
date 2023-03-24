import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_SHOE_MUTATION = gql`
  mutation DeleteShoeMutation($id: Int!) {
    deleteShoe(id: $id) {
      id
    }
  }
`

const Shoe = ({ shoe }) => {
  const [deleteShoe] = useMutation(DELETE_SHOE_MUTATION, {
    onCompleted: () => {
      toast.success('Shoe deleted')
      navigate(routes.shoes())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete shoe ' + id + '?')) {
      deleteShoe({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Shoe {shoe.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{shoe.id}</td>
            </tr>
            <tr>
              <th>Barcode</th>
              <td>{shoe.barcode}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{shoe.name}</td>
            </tr>
            <tr>
              <th>Size</th>
              <td>{shoe.size}</td>
            </tr>
            <tr>
              <th>Image path</th>
              <td>{shoe.imagePath}</td>
            </tr>
            <tr>
              <th>Color</th>
              <td>{shoe.color}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{shoe.description}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(shoe.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editShoe({ id: shoe.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(shoe.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Shoe
