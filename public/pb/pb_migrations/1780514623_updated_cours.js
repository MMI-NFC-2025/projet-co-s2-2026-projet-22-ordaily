/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_915157623")

  // update collection data
  unmarshal({
    "name": "cours_logement"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_915157623")

  // update collection data
  unmarshal({
    "name": "cours"
  }, collection)

  return app.save(collection)
})
