const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.MONGODB_URI;
const dbNamer = process.env.DB_NAME;
export const collections = {
  PRODUCTS: "products",
  ORDERS: "orders",
  USERS: "users",
  REVIEWS: "reviews",
};
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const dbConnect = (cname) => {
  try {
    if (!uri || !dbNamer) throw new Error("Missing MONGODB_URI or DB_NAME");
    return client.db(dbNamer).collection(cname);
  } catch (err) {
    console.error("dbConnect error:", err);
    // return a safe stub collection so callers don't crash
    return {
      find() {
        return { toArray: async () => [] };
      },
      async findOne() {
        return null;
      },
      async insertOne() {
        return { acknowledged: false };
      },
      async updateOne() {
        return { acknowledged: false };
      },
      async deleteOne() {
        return { acknowledged: false };
      },
    };
  }
};
