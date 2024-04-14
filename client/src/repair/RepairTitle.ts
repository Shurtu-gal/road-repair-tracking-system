import { Repair as TRepair } from "../api/repair/Repair";

export const REPAIR_TITLE_FIELD = "id";

export const RepairTitle = (record: TRepair): string => {
  return record.id?.toString() || String(record.id);
};
