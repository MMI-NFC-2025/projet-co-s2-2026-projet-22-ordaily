/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3165022119")

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "date3337355389",
    "max": "",
    "min": "",
    "name": "derniere_participation",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3165022119")

  // remove field
  collection.fields.removeById("date3337355389")

  return app.save(collection)
})
