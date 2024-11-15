-- CreateEnum
CREATE TYPE "Type" AS ENUM ('peinture', 'sculpture', 'dessin', 'acii_art');

-- CreateTable
CREATE TABLE "Artwork" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "type" "Type" NOT NULL,

    CONSTRAINT "Artwork_pkey" PRIMARY KEY ("id")
);
