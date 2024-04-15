import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  ReferenceField,
  DateField,
  EditButton,
  ShowButton,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { AREA_TITLE_FIELD } from "../area/AreaTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { RESIDENT_TITLE_FIELD } from "../resident/ResidentTitle";
import { REPAIR_TITLE_FIELD } from "../repair/RepairTitle";
import { REPORT_TITLE_FIELD } from "../report/ReportTitle";
import { UPDATE_TITLE_FIELD } from "../update/UpdateTitle";

export const ComplaintList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Complaints"}
      perPage={50}
      pagination={<Pagination />}
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
        <ReferenceField label="Repair" source="repair.id" reference="Repair">
          <TextField source={REPAIR_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Report" source="report.id" reference="Report">
          <TextField source={REPORT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Update" source="update.id" reference="Update">
          <TextField source={UPDATE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Deleted At" source="deletedAt" />
        <EditButton />
        <ShowButton />
      </Datagrid>
    </List>
  );
};
