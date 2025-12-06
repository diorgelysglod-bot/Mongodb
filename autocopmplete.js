db.products.aggregate([
  {
    $search: {
      index: "default",
      autocomplete: {
        query: "wire",
        path: "product_name",
        tokenOrder: "sequential",
      },
    },
  },
  {
    $limit: 5,
  },
  {
    $project: {
      product_name: 1,
      category: 1,
      discounted_price: 1,
      _id: 0,
    },
  },
]);
