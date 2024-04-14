import { Supervisor as TSupervisor } from "../api/supervisor/Supervisor";

export const SUPERVISOR_TITLE_FIELD = "id";

export const SupervisorTitle = (record: TSupervisor): string => {
  return record.id?.toString() || String(record.id);
};
