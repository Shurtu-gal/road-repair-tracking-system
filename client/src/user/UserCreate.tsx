import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  PasswordInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ResidentTitle } from "../resident/ResidentTitle";
import { SupervisorTitle } from "../supervisor/SupervisorTitle";
import { AdminTitle } from "../admin/AdminTitle";
import { MayorTitle } from "../mayor/MayorTitle";
import { ComplaintTitle } from "../complaint/ComplaintTitle";
import { RepairTitle } from "../repair/RepairTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Username" source="username" />
        <NumberInput step={1} label="Age" source="age" />
        <TextInput label="Phone" source="phone" />
        <PasswordInput label="Password" source="password" />
        <DateTimeInput label="Deleted At" source="deletedAt" />
        <ReferenceInput
          source="residents.id"
          reference="Resident"
          label="Residents"
        >
          <SelectInput optionText={ResidentTitle} />
        </ReferenceInput>
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
        <ReferenceInput source="mayor.id" reference="Mayor" label="Mayor">
          <SelectInput optionText={MayorTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="complaint"
          reference="Complaint"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ComplaintTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="repair"
          reference="Repair"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RepairTitle} />
        </ReferenceArrayInput>
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
