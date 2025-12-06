db.products.aggregate([
  {
    $project: {
      category: 1,
      product_name: 1,
      estimated_sales: { $multiply: ["$discounted_price", "$rating_count"] },
    },
  },
  {
    $group: {
      _id: "$category",
      total_revenue: { $sum: "$estimated_sales" },
      total_products: { $sum: 1 },
    },
  },
  { $sort: { total_revenue: -1 } },
]);

db.products.aggregate([
  {
    $match: {
      rating: { $gte: 4.0 },
      rating_count: { $gte: 100 },
    },
  },
  { $sort: { rating: -1, discounted_price: -1 } },
  { $limit: 5 },
  {
    $project: {
      product_name: 1,
      rating: 1,
      rating_count: 1,
      price: "$discounted_price",
    },
  },
]);

db.products.aggregate([
  {
    $bucketAuto: {
      groupBy: "$discounted_price",
      buckets: 3,
      output: {
        count: { $sum: 1 },
        min_price: { $min: "$discounted_price" },
        max_price: { $max: "$discounted_price" },
      },
    },
  },
]);
