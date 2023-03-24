-- CreateTable
CREATE TABLE "Shoe" (
    "id" SERIAL NOT NULL,
    "barcode" TEXT NOT NULL,
    "name" TEXT,
    "size" INTEGER NOT NULL,
    "imagePath" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Shoe_pkey" PRIMARY KEY ("id")
);
