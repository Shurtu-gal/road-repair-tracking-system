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
  BooleanField,
} from "react-admin";

import { AREA_TITLE_FIELD } from "../area/AreaTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { RESIDENT_TITLE_FIELD } from "../resident/ResidentTitle";
import { REPAIR_TITLE_FIELD } from "../repair/RepairTitle";
import { REPORT_TITLE_FIELD } from "./ReportTitle";
import { UPDATE_TITLE_FIELD } from "../update/UpdateTitle";
import { SUPERVISOR_TITLE_FIELD } from "../supervisor/SupervisorTitle";
import { ADMIN_TITLE_FIELD } from "../admin/AdminTitle";
import { REPAIRSCHEDULE_TITLE_FIELD } from "../repairSchedule/RepairScheduleTitle";
import { MAYOR_TITLE_FIELD } from "../mayor/MayorTitle";

export const ReportShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Complaint"
          target="reportId"
          label="Complaints"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <TextField label="Road" source="road" />
            <TextField label="Description" source="description" />
            <BooleanField label="Subscription" source="subscription" />
            <ReferenceField label="Area" source="area.id" reference="Area">
              <TextField source={AREA_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Severity" source="severity" />
            <TextField label="Status" source="status" />
            <ReferenceField
              label="Residents"
              source="resident.id"
              reference="Resident"
            >
              <TextField source={RESIDENT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Repair"
              source="repair.id"
              reference="Repair"
            >
              <TextField source={REPAIR_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Report"
              source="report.id"
              reference="Report"
            >
              <TextField source={REPORT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Update"
              source="update.id"
              reference="Update"
            >
              <TextField source={UPDATE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Deleted At" source="deletedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Resource"
          target="reportId"
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
          reference="Update"
          target="reportId"
          label="Updates"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <TextField label="Time" source="time" />
            <ReferenceField
              label="Report"
              source="report.id"
              reference="Report"
            >
              <TextField source={REPORT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Residents"
              source="resident.id"
              reference="Resident"
            >
              <TextField source={RESIDENT_TITLE_FIELD} />
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
