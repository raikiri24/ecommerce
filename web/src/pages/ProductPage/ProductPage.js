import { MetaTags } from '@redwoodjs/web'

import ProductCell from 'src/components/ProductCell'

const ProductPage = ({ id }) => {
  return (
    <>
      <MetaTags title="Product" description="Product page" />

      <h1>ProductPage</h1>
      <p>
        Find me in <code>./web/src/pages/ProductPage/ProductPage.js</code>
      </p>
      <ProductCell id={id} />
    </>
  )
}

export default ProductPage
