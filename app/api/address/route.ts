import { NextResponse } from "next/server";
import { parse } from "json2csv";
import fs from "fs/promises";
import path from "path";
import { headers } from "next/headers";

export async function POST(req: Request) {
  const body = await req.json();
  const filePath = path.join(process.cwd(), "resources", "address.csv");

  try {
    const csv = parse(body, { header: false });
    console.log(csv);
    await fs.access(filePath);
    // If the file exists, append to it
    await fs.appendFile(filePath, csv + "\n");
  } catch (error) {
    // If the file does not exist, write a new file
    const csv = parse(body, { fields: ["username", "address"] });
    await fs.writeFile(filePath, csv + "\n");
  }

  return NextResponse.json({ status: 200 });
}
