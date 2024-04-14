import { Mayor as TMayor } from "../api/mayor/Mayor";

export const MAYOR_TITLE_FIELD = "city";

export const MayorTitle = (record: TMayor): string => {
  return record.city?.toString() || String(record.id);
};
