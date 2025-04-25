/*
  Warnings:

  - A unique constraint covering the columns `[label]` on the table `Navigation` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Navigation_label_key" ON "Navigation"("label");
