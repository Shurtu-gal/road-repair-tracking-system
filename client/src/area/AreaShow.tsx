import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { AREA_TITLE_FIELD } from "./AreaTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { REPAIRSCHEDULE_TITLE_FIELD } from "../repairSchedule/RepairScheduleTitle";
import { ADMIN_TITLE_FIELD } from "../admin/AdminTitle";
import { RESIDENT_TITLE_FIELD } from "../resident/ResidentTitle";
import { REPAIR_TITLE_FIELD } from "../repair/RepairTitle";
import { REPORT_TITLE_FIELD } from "../report/ReportTitle";
import { UPDATE_TITLE_FIELD } from "../update/UpdateTitle";
import { SUPERVISOR_TITLE_FIELD } from "../supervisor/SupervisorTitle";

export const AreaShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Address" source="address" />
        <TextField label="Region" source="region" />
        <TextField label="Country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Deleted At" source="deletedAt" />
        <ReferenceManyField
          reference="Resident"
          target="areaId"
          label="Residents"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <ReferenceField label="Area" source="area.id" reference="Area">
              <TextField source={AREA_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Deleted At" source="deletedAt" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Supervisor"
          target="areaId"
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
          reference="Complaint"
          target="areaId"
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
        <ReferenceManyField reference="Repair" target="areaId" label="Repairs">
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
      </SimpleShowLayout>
    </Show>
  );
};
