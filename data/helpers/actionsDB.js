const knex = require('knex')
const config = require('../../knexfile')
const actsDB = knex(config.development)

module.exports = {
 pull: () => {
   // knex query builder for returning all actions
  return actsDB("actions")
 },

 pullById: (id) => {
   // knex query builder for returning action based on id
  return actsDB("actions")
               .where({id: id})
 },

 place: (action) => {
   // knex query builder for inserting an action, returns id.
  return actsDB("actions")
               .insert(action)
               .then(ids => ({id: ids[0]}))
 },

 alter: (id, action) => {
  return actsDB("actions")
               .where({id: id})
               .update(action)
 },

 clear: (id) => {
  return actsDB("actions")
               .where({id: id})
               .del()
 }
}