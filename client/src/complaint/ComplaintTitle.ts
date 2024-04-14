import { Complaint as TComplaint } from "../api/complaint/Complaint";

export const COMPLAINT_TITLE_FIELD = "road";

export const ComplaintTitle = (record: TComplaint): string => {
  return record.road?.toString() || String(record.id);
};
