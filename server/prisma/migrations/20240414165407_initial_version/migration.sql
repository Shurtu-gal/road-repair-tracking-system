/*
  Warnings:

  - The primary key for the `Admin` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Area` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Complaint` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Mayor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Repair` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `RepairSchedule` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Report` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Residents` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Resource` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Supervisors` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Update` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Admin" DROP CONSTRAINT "Admin_mayorId_fkey";

-- DropForeignKey
ALTER TABLE "Admin" DROP CONSTRAINT "Admin_userId_fkey";

-- DropForeignKey
ALTER TABLE "Complaint" DROP CONSTRAINT "Complaint_areaId_fkey";

-- DropForeignKey
ALTER TABLE "Complaint" DROP CONSTRAINT "Complaint_repairId_fkey";

-- DropForeignKey
ALTER TABLE "Complaint" DROP CONSTRAINT "Complaint_reportId_fkey";

-- DropForeignKey
ALTER TABLE "Complaint" DROP CONSTRAINT "Complaint_residentsId_fkey";

-- DropForeignKey
ALTER TABLE "Complaint" DROP CONSTRAINT "Complaint_updateId_fkey";

-- DropForeignKey
ALTER TABLE "Complaint" DROP CONSTRAINT "Complaint_userId_fkey";

-- DropForeignKey
ALTER TABLE "Mayor" DROP CONSTRAINT "Mayor_userId_fkey";

-- DropForeignKey
ALTER TABLE "Repair" DROP CONSTRAINT "Repair_areaId_fkey";

-- DropForeignKey
ALTER TABLE "Repair" DROP CONSTRAINT "Repair_assignedToId_fkey";

-- DropForeignKey
ALTER TABLE "Repair" DROP CONSTRAINT "Repair_repairScheduleId_fkey";

-- DropForeignKey
ALTER TABLE "Repair" DROP CONSTRAINT "Repair_supervisorsId_fkey";

-- DropForeignKey
ALTER TABLE "RepairSchedule" DROP CONSTRAINT "RepairSchedule_AdminId_fkey";

-- DropForeignKey
ALTER TABLE "Report" DROP CONSTRAINT "Report_mayorId_fkey";

-- DropForeignKey
ALTER TABLE "Report" DROP CONSTRAINT "Report_repairScheduleId_fkey";

-- DropForeignKey
ALTER TABLE "Residents" DROP CONSTRAINT "Residents_areaId_fkey";

-- DropForeignKey
ALTER TABLE "Residents" DROP CONSTRAINT "Residents_userId_fkey";

-- DropForeignKey
ALTER TABLE "Resource" DROP CONSTRAINT "Resource_AdminId_fkey";

-- DropForeignKey
ALTER TABLE "Resource" DROP CONSTRAINT "Resource_allocationId_fkey";

-- DropForeignKey
ALTER TABLE "Resource" DROP CONSTRAINT "Resource_reportId_fkey";

-- DropForeignKey
ALTER TABLE "Resource" DROP CONSTRAINT "Resource_supervisorsId_fkey";

-- DropForeignKey
ALTER TABLE "Supervisors" DROP CONSTRAINT "Supervisors_AdminId_fkey";

-- DropForeignKey
ALTER TABLE "Supervisors" DROP CONSTRAINT "Supervisors_areaId_fkey";

-- DropForeignKey
ALTER TABLE "Supervisors" DROP CONSTRAINT "Supervisors_repairScheduleId_fkey";

-- DropForeignKey
ALTER TABLE "Supervisors" DROP CONSTRAINT "Supervisors_userId_fkey";

-- DropForeignKey
ALTER TABLE "Update" DROP CONSTRAINT "Update_reportId_fkey";

-- DropForeignKey
ALTER TABLE "Update" DROP CONSTRAINT "Update_residentsId_fkey";

-- AlterTable
ALTER TABLE "Admin" DROP CONSTRAINT "Admin_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "mayorId" SET DATA TYPE TEXT,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Admin_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Admin_id_seq";

-- AlterTable
ALTER TABLE "Area" DROP CONSTRAINT "Area_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Area_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Area_id_seq";

-- AlterTable
ALTER TABLE "Complaint" DROP CONSTRAINT "Complaint_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "areaId" SET DATA TYPE TEXT,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ALTER COLUMN "residentsId" SET DATA TYPE TEXT,
ALTER COLUMN "repairId" SET DATA TYPE TEXT,
ALTER COLUMN "reportId" SET DATA TYPE TEXT,
ALTER COLUMN "updateId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Complaint_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Complaint_id_seq";

-- AlterTable
ALTER TABLE "Mayor" DROP CONSTRAINT "Mayor_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Mayor_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Mayor_id_seq";

-- AlterTable
ALTER TABLE "Repair" DROP CONSTRAINT "Repair_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "assignedToId" SET DATA TYPE TEXT,
ALTER COLUMN "areaId" SET DATA TYPE TEXT,
ALTER COLUMN "supervisorsId" SET DATA TYPE TEXT,
ALTER COLUMN "repairScheduleId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Repair_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Repair_id_seq";

-- AlterTable
ALTER TABLE "RepairSchedule" DROP CONSTRAINT "RepairSchedule_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "AdminId" SET DATA TYPE TEXT,
ADD CONSTRAINT "RepairSchedule_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "RepairSchedule_id_seq";

-- AlterTable
ALTER TABLE "Report" DROP CONSTRAINT "Report_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "repairScheduleId" SET DATA TYPE TEXT,
ALTER COLUMN "mayorId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Report_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Report_id_seq";

-- AlterTable
ALTER TABLE "Residents" DROP CONSTRAINT "Residents_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "areaId" SET DATA TYPE TEXT,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Residents_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Residents_id_seq";

-- AlterTable
ALTER TABLE "Resource" DROP CONSTRAINT "Resource_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "allocationId" SET DATA TYPE TEXT,
ALTER COLUMN "supervisorsId" SET DATA TYPE TEXT,
ALTER COLUMN "AdminId" SET DATA TYPE TEXT,
ALTER COLUMN "reportId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Resource_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Resource_id_seq";

-- AlterTable
ALTER TABLE "Supervisors" DROP CONSTRAINT "Supervisors_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "areaId" SET DATA TYPE TEXT,
ALTER COLUMN "repairScheduleId" SET DATA TYPE TEXT,
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ALTER COLUMN "AdminId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Supervisors_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Supervisors_id_seq";

-- AlterTable
ALTER TABLE "Update" DROP CONSTRAINT "Update_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "reportId" SET DATA TYPE TEXT,
ALTER COLUMN "residentsId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Update_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Update_id_seq";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- AddForeignKey
ALTER TABLE "Residents" ADD CONSTRAINT "Residents_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "Area"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Residents" ADD CONSTRAINT "Residents_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Supervisors" ADD CONSTRAINT "Supervisors_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "Area"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Supervisors" ADD CONSTRAINT "Supervisors_repairScheduleId_fkey" FOREIGN KEY ("repairScheduleId") REFERENCES "RepairSchedule"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Supervisors" ADD CONSTRAINT "Supervisors_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Supervisors" ADD CONSTRAINT "Supervisors_AdminId_fkey" FOREIGN KEY ("AdminId") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_mayorId_fkey" FOREIGN KEY ("mayorId") REFERENCES "Mayor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Mayor" ADD CONSTRAINT "Mayor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Complaint" ADD CONSTRAINT "Complaint_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "Area"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Complaint" ADD CONSTRAINT "Complaint_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Complaint" ADD CONSTRAINT "Complaint_residentsId_fkey" FOREIGN KEY ("residentsId") REFERENCES "Residents"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Complaint" ADD CONSTRAINT "Complaint_repairId_fkey" FOREIGN KEY ("repairId") REFERENCES "Repair"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Complaint" ADD CONSTRAINT "Complaint_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "Report"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Complaint" ADD CONSTRAINT "Complaint_updateId_fkey" FOREIGN KEY ("updateId") REFERENCES "Update"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Repair" ADD CONSTRAINT "Repair_assignedToId_fkey" FOREIGN KEY ("assignedToId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Repair" ADD CONSTRAINT "Repair_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "Area"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Repair" ADD CONSTRAINT "Repair_supervisorsId_fkey" FOREIGN KEY ("supervisorsId") REFERENCES "Supervisors"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Repair" ADD CONSTRAINT "Repair_repairScheduleId_fkey" FOREIGN KEY ("repairScheduleId") REFERENCES "RepairSchedule"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resource" ADD CONSTRAINT "Resource_allocationId_fkey" FOREIGN KEY ("allocationId") REFERENCES "Repair"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resource" ADD CONSTRAINT "Resource_supervisorsId_fkey" FOREIGN KEY ("supervisorsId") REFERENCES "Supervisors"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resource" ADD CONSTRAINT "Resource_AdminId_fkey" FOREIGN KEY ("AdminId") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resource" ADD CONSTRAINT "Resource_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "Report"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RepairSchedule" ADD CONSTRAINT "RepairSchedule_AdminId_fkey" FOREIGN KEY ("AdminId") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_repairScheduleId_fkey" FOREIGN KEY ("repairScheduleId") REFERENCES "RepairSchedule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Report" ADD CONSTRAINT "Report_mayorId_fkey" FOREIGN KEY ("mayorId") REFERENCES "Mayor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Update" ADD CONSTRAINT "Update_reportId_fkey" FOREIGN KEY ("reportId") REFERENCES "Report"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Update" ADD CONSTRAINT "Update_residentsId_fkey" FOREIGN KEY ("residentsId") REFERENCES "Residents"("id") ON DELETE SET NULL ON UPDATE CASCADE;
