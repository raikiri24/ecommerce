import { MetaTags } from '@redwoodjs/web'

import ShopCell from 'src/components/ShopCell/ShopCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>
        <ShopCell />
      </p>
    </>
  )
}

export default HomePage
