import { RepairSchedule as TRepairSchedule } from "../api/repairSchedule/RepairSchedule";

export const REPAIRSCHEDULE_TITLE_FIELD = "id";

export const RepairScheduleTitle = (record: TRepairSchedule): string => {
  return record.id?.toString() || String(record.id);
};
