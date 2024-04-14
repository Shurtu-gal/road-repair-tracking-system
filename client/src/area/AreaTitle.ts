import { Area as TArea } from "../api/area/Area";

export const AREA_TITLE_FIELD = "name";

export const AreaTitle = (record: TArea): string => {
  return record.name?.toString() || String(record.id);
};
