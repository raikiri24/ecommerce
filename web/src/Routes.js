// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/product/{id:Int}" page={ProductPage} name="product" />
      <Set wrap={ScaffoldLayout} title="Shoes" titleTo="shoes" buttonLabel="New Shoe" buttonTo="newShoe">
        <Route path="/shoes/new" page={ShoeNewShoePage} name="newShoe" />
        <Route path="/shoes/{id:Int}/edit" page={ShoeEditShoePage} name="editShoe" />
        <Route path="/shoes/{id:Int}" page={ShoeShoePage} name="shoe" />
        <Route path="/shoes" page={ShoeShoesPage} name="shoes" />
      </Set>
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
