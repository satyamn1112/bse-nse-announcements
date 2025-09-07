import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("announcements_db");

  const data = {
    date: new Date(),
    orderWins: [{ company: "ABC Ltd", details: "Won big government order" }],
    managementChanges: [{ company: "XYZ Ltd", details: "New CEO appointed" }],
    earnings: [{ company: "PQR Ltd", details: "Q1 earnings announced" }],
  };

  await db.collection("daily_announcements").insertOne(data);

  res.status(200).json({ message: "Saved sample announcements" });
}
