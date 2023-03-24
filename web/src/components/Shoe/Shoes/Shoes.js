import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Shoe/ShoesCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_SHOE_MUTATION = gql`
  mutation DeleteShoeMutation($id: Int!) {
    deleteShoe(id: $id) {
      id
    }
  }
`

const ShoesList = ({ shoes }) => {
  const [deleteShoe] = useMutation(DELETE_SHOE_MUTATION, {
    onCompleted: () => {
      toast.success('Shoe deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete shoe ' + id + '?')) {
      deleteShoe({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Barcode</th>
            <th>Name</th>
            <th>Size</th>
            <th>Image path</th>
            <th>Color</th>
            <th>Description</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {shoes.map((shoe) => (
            <tr key={shoe.id}>
              <td>{truncate(shoe.id)}</td>
              <td>{truncate(shoe.barcode)}</td>
              <td>{truncate(shoe.name)}</td>
              <td>{truncate(shoe.size)}</td>
              <td>{truncate(shoe.imagePath)}</td>
              <td>{truncate(shoe.color)}</td>
              <td>{truncate(shoe.description)}</td>
              <td>{timeTag(shoe.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.shoe({ id: shoe.id })}
                    title={'Show shoe ' + shoe.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editShoe({ id: shoe.id })}
                    title={'Edit shoe ' + shoe.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete shoe ' + shoe.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(shoe.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ShoesList
