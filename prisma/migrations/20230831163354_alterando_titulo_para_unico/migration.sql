/*
  Warnings:

  - A unique constraint covering the columns `[titulo]` on the table `Conteudo` will be added. If there are existing duplicate values, this will fail.
  - Made the column `criadoEm` on table `Conteudo` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Conteudo" ALTER COLUMN "criadoEm" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Conteudo_titulo_key" ON "Conteudo"("titulo");
