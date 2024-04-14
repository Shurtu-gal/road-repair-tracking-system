import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { RepairTitle } from "../repair/RepairTitle";
import { SupervisorTitle } from "../supervisor/SupervisorTitle";
import { AdminTitle } from "../admin/AdminTitle";
import { ReportTitle } from "../report/ReportTitle";

export const ResourceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Quantity" source="quantity" />
        <ReferenceInput
          source="allocation.id"
          reference="Repair"
          label="Allocation"
        >
          <SelectInput optionText={RepairTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Price" source="price" />
        <ReferenceInput
          source="supervisors.id"
          reference="Supervisor"
          label="Supervisors"
        >
          <SelectInput optionText={SupervisorTitle} />
        </ReferenceInput>
        <ReferenceInput source="admin.id" reference="Admin" label="Admin">
          <SelectInput optionText={AdminTitle} />
        </ReferenceInput>
        <ReferenceInput source="report.id" reference="Report" label="Report">
          <SelectInput optionText={ReportTitle} />
        </ReferenceInput>
        <DateTimeInput label="Deleted At" source="deletedAt" />
      </SimpleForm>
    </Edit>
  );
};
