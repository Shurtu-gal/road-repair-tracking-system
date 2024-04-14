import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { REPAIR_TITLE_FIELD } from "../repair/RepairTitle";
import { SUPERVISOR_TITLE_FIELD } from "../supervisor/SupervisorTitle";
import { ADMIN_TITLE_FIELD } from "../admin/AdminTitle";
import { REPORT_TITLE_FIELD } from "../report/ReportTitle";

export const ResourceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceField label="Report" source="report.id" reference="Report">
          <TextField source={REPORT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Deleted At" source="deletedAt" />
      </SimpleShowLayout>
    </Show>
  );
};
