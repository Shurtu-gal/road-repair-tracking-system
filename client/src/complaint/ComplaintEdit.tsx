import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { AreaTitle } from "../area/AreaTitle";
import { UserTitle } from "../user/UserTitle";
import { ResidentTitle } from "../resident/ResidentTitle";
import { RepairTitle } from "../repair/RepairTitle";
import { ReportTitle } from "../report/ReportTitle";
import { UpdateTitle } from "../update/UpdateTitle";

export const ComplaintEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Road" source="road" />
        <TextInput label="Description" source="description" />
        <BooleanInput label="Subscription" source="subscription" />
        <ReferenceInput source="area.id" reference="Area" label="Area">
          <SelectInput optionText={AreaTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <SelectInput
          source="severity"
          label="Severity"
          choices={[
            { label: "Low", value: "Low" },
            { label: "Medium", value: "Medium" },
            { label: "High", value: "High" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "Pending", value: "Pending" },
            { label: "InProgress", value: "InProgress" },
            { label: "Completed", value: "Completed" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput
          source="residents.id"
          reference="Resident"
          label="Residents"
        >
          <SelectInput optionText={ResidentTitle} />
        </ReferenceInput>
        <ReferenceInput source="repair.id" reference="Repair" label="Repair">
          <SelectInput optionText={RepairTitle} />
        </ReferenceInput>
        <ReferenceInput source="report.id" reference="Report" label="Report">
          <SelectInput optionText={ReportTitle} />
        </ReferenceInput>
        <ReferenceInput source="update.id" reference="Update" label="Update">
          <SelectInput optionText={UpdateTitle} />
        </ReferenceInput>
        <DateTimeInput label="Deleted At" source="deletedAt" />
      </SimpleForm>
    </Edit>
  );
};
