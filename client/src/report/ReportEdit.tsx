import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { RepairScheduleTitle } from "../repairSchedule/RepairScheduleTitle";
import { MayorTitle } from "../mayor/MayorTitle";
import { ComplaintTitle } from "../complaint/ComplaintTitle";
import { ResourceTitle } from "../resource/ResourceTitle";
import { UpdateTitle } from "../update/UpdateTitle";

export const ReportEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Time" source="time" />
        <ReferenceInput
          source="repairSchedule.id"
          reference="RepairSchedule"
          label="Repair Schedule"
        >
          <SelectInput optionText={RepairScheduleTitle} />
        </ReferenceInput>
        <ReferenceInput source="mayor.id" reference="Mayor" label="Mayor">
          <SelectInput optionText={MayorTitle} />
        </ReferenceInput>
        <DateTimeInput label="Deleted At" source="deletedAt" />
        <ReferenceArrayInput
          source="complaints"
          reference="Complaint"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ComplaintTitle} />
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
          source="update"
          reference="Update"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UpdateTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
