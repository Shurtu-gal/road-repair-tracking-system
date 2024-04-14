import { Update as TUpdate } from "../api/update/Update";

export const UPDATE_TITLE_FIELD = "id";

export const UpdateTitle = (record: TUpdate): string => {
  return record.id?.toString() || String(record.id);
};
