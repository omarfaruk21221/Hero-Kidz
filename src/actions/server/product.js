"use server";

import { dbConnect, collections } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function getProducts() {
  try {
    const products = await dbConnect(collections.PRODUCTS).find({}).toArray();
    return products;
  } catch (err) {
    console.error("getProducts error:", err);
    return [];
  }
}

export const getSingleProduct = async (id) => {
  if (id.length !== 24) {
    return {};
  }
  try {
    const query = { _id: new ObjectId(id) };
    const product = await dbConnect(collections.PRODUCTS).findOne(query);
    return product || {};
  } catch (err) {
    console.error("getSingleProduct error:", err);
    return {};
  }
};
