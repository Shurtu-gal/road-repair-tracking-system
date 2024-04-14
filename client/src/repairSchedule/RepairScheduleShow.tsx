import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { AREA_TITLE_FIELD } from "../area/AreaTitle";
import { REPAIRSCHEDULE_TITLE_FIELD } from "./RepairScheduleTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { ADMIN_TITLE_FIELD } from "../admin/AdminTitle";
import { SUPERVISOR_TITLE_FIELD } from "../supervisor/SupervisorTitle";
import { MAYOR_TITLE_FIELD } from "../mayor/MayorTitle";

export const RepairScheduleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Time" source="time" />
        <ReferenceField label="Admin" source="admin.id" reference="Admin">
          <TextField source={ADMIN_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Deleted At" source="deletedAt" />
        <ReferenceManyField
          reference="Supervisor"
          target="repairScheduleId"
          label="Supervisors"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <ReferenceField label="Area" source="area.id" reference="Area">
              <TextField source={AREA_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Repair Schedule"
              source="repairschedule.id"
              reference="RepairSchedule"
            >
              <TextField source={REPAIRSCHEDULE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Admin" source="admin.id" reference="Admin">
              <TextField source={ADMIN_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Deleted At" source="deletedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Repair"
          target="repairScheduleId"
          label="Repairs"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <TextField label="Status" source="status" />
            <TextField label="Priority" source="priority" />
            <ReferenceField
              label="Assigned To"
              source="user.id"
              reference="User"
            >
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
        </ReferenceManyField>
        <ReferenceManyField
          reference="Report"
          target="repairScheduleId"
          label="Reports"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <TextField label="Time" source="time" />
            <ReferenceField
              label="Repair Schedule"
              source="repairschedule.id"
              reference="RepairSchedule"
            >
              <TextField source={REPAIRSCHEDULE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Mayor" source="mayor.id" reference="Mayor">
              <TextField source={MAYOR_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Deleted At" source="deletedAt" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
