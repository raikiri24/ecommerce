import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const ShoeForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.shoe?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="barcode"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Barcode
        </Label>

        <TextField
          name="barcode"
          defaultValue={props.shoe?.barcode}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="barcode" className="rw-field-error" />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.shoe?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="size"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Size
        </Label>

        <NumberField
          name="size"
          defaultValue={props.shoe?.size}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="size" className="rw-field-error" />

        <Label
          name="imagePath"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image path
        </Label>

        <TextField
          name="imagePath"
          defaultValue={props.shoe?.imagePath}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="imagePath" className="rw-field-error" />

        <Label
          name="color"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Color
        </Label>

        <TextField
          name="color"
          defaultValue={props.shoe?.color}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="color" className="rw-field-error" />
        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.shoe?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="description" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ShoeForm
