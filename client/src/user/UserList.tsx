import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { RESIDENT_TITLE_FIELD } from "../resident/ResidentTitle";
import { SUPERVISOR_TITLE_FIELD } from "../supervisor/SupervisorTitle";
import { ADMIN_TITLE_FIELD } from "../admin/AdminTitle";
import { MAYOR_TITLE_FIELD } from "../mayor/MayorTitle";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Username" source="username" />
        <TextField label="Age" source="age" />
        <TextField label="Phone" source="phone" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Deleted At" source="deletedAt" />
        <ReferenceField
          label="Residents"
          source="resident.id"
          reference="Resident"
        >
          <TextField source={RESIDENT_TITLE_FIELD} />
        </ReferenceField>
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
        <ReferenceField label="Mayor" source="mayor.id" reference="Mayor">
          <TextField source={MAYOR_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Roles" source="roles" />
      </Datagrid>
    </List>
  );
};
