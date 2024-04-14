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
import { REPAIRSCHEDULE_TITLE_FIELD } from "../repairSchedule/RepairScheduleTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { ADMIN_TITLE_FIELD } from "./AdminTitle";
import { REPAIR_TITLE_FIELD } from "../repair/RepairTitle";
import { SUPERVISOR_TITLE_FIELD } from "../supervisor/SupervisorTitle";
import { REPORT_TITLE_FIELD } from "../report/ReportTitle";
import { MAYOR_TITLE_FIELD } from "../mayor/MayorTitle";

export const AdminShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <ReferenceField label="Mayor" source="mayor.id" reference="Mayor">
          <TextField source={MAYOR_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Deleted At" source="deletedAt" />
        <ReferenceManyField
          reference="Supervisor"
          target="AdminId"
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
          reference="Resource"
          target="AdminId"
          label="Resources"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="Quantity" source="quantity" />
            <ReferenceField
              label="Allocation"
              source="repair.id"
              reference="Repair"
            >
              <TextField source={REPAIR_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Price" source="price" />
            <ReferenceField
              label="Supervisors"
              source="supervisor.id"
              reference="Supervisor"
            >
              <TextField source={SUPERVISOR_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Admin" source="admin.id" reference="Admin">
              <TextField source={ADMIN_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Report"
              source="report.id"
              reference="Report"
            >
              <TextField source={REPORT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Deleted At" source="deletedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="RepairSchedule"
          target="AdminId"
          label="RepairSchedules"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <TextField label="Time" source="time" />
            <ReferenceField label="Admin" source="admin.id" reference="Admin">
              <TextField source={ADMIN_TITLE_FIELD} />
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
