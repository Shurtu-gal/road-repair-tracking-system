import { Report as TReport } from "../api/report/Report";

export const REPORT_TITLE_FIELD = "id";

export const ReportTitle = (record: TReport): string => {
  return record.id?.toString() || String(record.id);
};
