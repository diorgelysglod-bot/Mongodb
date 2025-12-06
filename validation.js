{
  "$jsonSchema": {
    "bsonType": "object",
    "required": [
      "product_name",
      "category",
      "discounted_price",
      "rating"
    ],
    "properties": {
      "product_name": {
        "bsonType": "string",
        "description": "must be a string and is required"
      },
      "category": {
        "bsonType": "string",
        "description": "must be a string and is required"
      },
      "discounted_price": {
        "bsonType": [ "double", "int" ],
        "minimum": 0,
        "description": "must be a non-negative number and is required"
      },
      "rating": {
        "bsonType": [ "double", "int" ],
        "minimum": 0,
        "maximum": 5,
        "description": "must be a number between 0 and 5"
      }
    }
  }
}

{
  "$jsonSchema": {
    "bsonType": "object",
    "required": [ "title", "product_id", "user" ],
    "properties": {
      "title": {
        "bsonType": "string",
        "description": "must be a string and is required"
      },
      "product_id": {
        "bsonType": "string",
        "description": "must be a string reference to the product and is required"
      },
      "user": {
        "bsonType": "object",
        "required": [ "id", "name" ],
        "properties": {
          "id": {
            "bsonType": "string",
            "description": "user ID must be a string and is required"
          },
          "name": {
            "bsonType": "string",
            "description": "user name must be a string and is required"
          }
        }
      }
    }
  }
}
