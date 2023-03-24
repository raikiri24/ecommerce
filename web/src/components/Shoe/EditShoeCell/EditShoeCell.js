import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ShoeForm from 'src/components/Shoe/ShoeForm'

export const QUERY = gql`
  query EditShoeById($id: Int!) {
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
const UPDATE_SHOE_MUTATION = gql`
  mutation UpdateShoeMutation($id: Int!, $input: UpdateShoeInput!) {
    updateShoe(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ shoe }) => {
  const [updateShoe, { loading, error }] = useMutation(UPDATE_SHOE_MUTATION, {
    onCompleted: () => {
      toast.success('Shoe updated')
      navigate(routes.shoes())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateShoe({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Shoe {shoe?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ShoeForm shoe={shoe} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
