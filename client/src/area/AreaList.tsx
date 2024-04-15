import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField, ShowButton, EditButton } from "react-admin";
import Pagination from "../Components/Pagination";

export const AreaList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Areas"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Address" source="address" />
        <TextField label="Region" source="region" />
        <TextField label="Country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Deleted At" source="deletedAt" />
        <EditButton />
        <ShowButton />
      </Datagrid>
    </List>
  );
};
