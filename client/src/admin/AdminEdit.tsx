import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { MayorTitle } from "../mayor/MayorTitle";
import { UserTitle } from "../user/UserTitle";
import { SupervisorTitle } from "../supervisor/SupervisorTitle";
import { ResourceTitle } from "../resource/ResourceTitle";
import { RepairScheduleTitle } from "../repairSchedule/RepairScheduleTitle";

export const AdminEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="mayor.id" reference="Mayor" label="Mayor">
          <SelectInput optionText={MayorTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <DateTimeInput label="Deleted At" source="deletedAt" />
        <ReferenceArrayInput
          source="supervisors"
          reference="Supervisor"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SupervisorTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="resources"
          reference="Resource"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ResourceTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="repairSchedules"
          reference="RepairSchedule"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RepairScheduleTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
