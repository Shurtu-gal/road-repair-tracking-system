import { Resident as TResident } from "../api/resident/Resident";

export const RESIDENT_TITLE_FIELD = "id";

export const ResidentTitle = (record: TResident): string => {
  return record.id?.toString() || String(record.id);
};
