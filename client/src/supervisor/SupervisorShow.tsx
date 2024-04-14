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

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { AREA_TITLE_FIELD } from "../area/AreaTitle";
import { SUPERVISOR_TITLE_FIELD } from "./SupervisorTitle";
import { REPAIRSCHEDULE_TITLE_FIELD } from "../repairSchedule/RepairScheduleTitle";
import { REPAIR_TITLE_FIELD } from "../repair/RepairTitle";
import { ADMIN_TITLE_FIELD } from "../admin/AdminTitle";
import { REPORT_TITLE_FIELD } from "../report/ReportTitle";

export const SupervisorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Repair"
          target="supervisorsId"
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
          reference="Resource"
          target="supervisorsId"
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
      </SimpleShowLayout>
    </Show>
  );
};
