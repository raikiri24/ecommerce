export const schema = gql`
  type Shoe {
    id: Int!
    barcode: String!
    name: String
    size: Int!
    imagePath: String!
    color: String!
    description: String!
    createdAt: DateTime!
  }

  type Query {
    shoes: [Shoe!]! @requireAuth
    shoe(id: Int!): Shoe @requireAuth
  }

  input CreateShoeInput {
    barcode: String!
    name: String
    size: Int!
    imagePath: String!
    color: String!
    description: String!
  }

  input UpdateShoeInput {
    barcode: String
    name: String
    size: Int
    imagePath: String
    color: String
    description: String
  }

  type Mutation {
    createShoe(input: CreateShoeInput!): Shoe! @requireAuth
    updateShoe(id: Int!, input: UpdateShoeInput!): Shoe! @requireAuth
    deleteShoe(id: Int!): Shoe! @requireAuth
  }
`
