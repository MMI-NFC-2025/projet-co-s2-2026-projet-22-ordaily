/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_409593308")

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select1605820103",
    "maxSelect": 1,
    "name": "reponse_juste",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "reponse_a",
      "reponse_b"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_409593308")

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select1605820103",
    "maxSelect": 1,
    "name": "reponse",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "reponse_a",
      "reponse_b"
    ]
  }))

  return app.save(collection)
})
