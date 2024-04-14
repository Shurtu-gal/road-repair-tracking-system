import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { AREA_TITLE_FIELD } from "../area/AreaTitle";
import { SUPERVISOR_TITLE_FIELD } from "../supervisor/SupervisorTitle";
import { REPAIRSCHEDULE_TITLE_FIELD } from "../repairSchedule/RepairScheduleTitle";

export const RepairList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Repairs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <TextField label="Status" source="status" />
        <TextField label="Priority" source="priority" />
        <ReferenceField label="Assigned To" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Area" source="area.id" reference="Area">
          <TextField source={AREA_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Supervisors"
          source="supervisor.id"
          reference="Supervisor"
        >
          <TextField source={SUPERVISOR_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Repair Schedule"
          source="repairschedule.id"
          reference="RepairSchedule"
        >
          <TextField source={REPAIRSCHEDULE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Deleted At" source="deletedAt" />
      </Datagrid>
    </List>
  );
};
