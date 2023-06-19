import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";
import { Members } from "@/models/members";

type ReturnMembers = {
  members: Members[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ReturnMembers>
) {
  const mongoClient = await clientPromise;
  const data = await mongoClient
    .db(process.env.DB_NAME as string)
    .collection(process.env.MEMBERS_COLLECTION_NAME as string)
    .find()
    .toArray();

  const dataToJson = JSON.parse(JSON.stringify(data));

  res.status(200).json(dataToJson);
}
