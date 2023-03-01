-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "code" VARCHAR(200) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Historic" (
    "id" SERIAL NOT NULL,
    "startTime" DATE NOT NULL,
    "finishTime" DATE NOT NULL,
    "codeUser" TEXT NOT NULL,

    CONSTRAINT "Historic_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_code_key" ON "User"("code");

-- AddForeignKey
ALTER TABLE "Historic" ADD CONSTRAINT "Historic_codeUser_fkey" FOREIGN KEY ("codeUser") REFERENCES "User"("code") ON DELETE RESTRICT ON UPDATE CASCADE;
