import { Resource as TResource } from "../api/resource/Resource";

export const RESOURCE_TITLE_FIELD = "name";

export const ResourceTitle = (record: TResource): string => {
  return record.name?.toString() || String(record.id);
};
