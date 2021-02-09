import knex from 'knex'

const connection = knex({
  client:'pg',
  
})

export default connection