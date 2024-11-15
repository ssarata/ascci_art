import fs from "node:fs/promises";

import { PrismaClient } from "@prisma/client";
import fileurl from "node:url"
import path from "node:path"

const current=fileurl.fileURLToPath(import.meta.url)
console.log(import.meta.url);

const direName=path.dirname(current)
const seed_file_path=direName+"/db_data_seed.json"
const prisma =new PrismaClient()
async function seedRun(){
  try {
    const file=await fs.open(seed_file_path,'r')
    const fileContent = await file.readFile("utf-8");
    const artworks = JSON.parse(fileContent);
    console.log(artworks);
    await prisma.artwork.createMany({
      data: artworks,});
   
    // const file=await fs.open('seed/db_data_seed.json','r')
    // const fileContent = await file.readFile("utf-8");
    // const artworks = JSON.parse(fileContent);
    // console.log(artworks);
    // await prisma.artwork.createMany({
    //   data: artworks,});
   
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}
//seedRun()
