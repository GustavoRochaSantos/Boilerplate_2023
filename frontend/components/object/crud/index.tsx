import React from "react";
import { CRUDConfig, Field } from "./types";
import { Card } from "@/components";

interface Params {
  config: CRUDConfig;
}

interface ColumnsType {
  name: string;
  label: string;
}

const CRUD = ({ config }: Params) => {
  const data = [
    {
      id: 1,
      title: "Basico",
    },
    {
      id: 2,
      title: "Financeiro",
    },
  ];

  const columnsName = config.fields.reduce((columns, field) => {
    if (field.listing?.grid?.include && !field.listing.grid.hidden) {
      const column = {
        name: field.name,
        label: field.label,
        order: field.listing.grid.order,
      };
      return [...columns, column];
    }
    return columns;
  }, [] as any[]);

  return (
    <Card title={`${config.titles.listing} ${config.entityPlural}`}>
      <table>
        <thead>
          <tr>
            {columnsName.map((column) => (
              <th>{column.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0 ? (
            data.map((row: any) => (
              <tr>
                {columnsName.map((column: ColumnsType) => (
                  <td>{row[column.name]}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columnsName.length}>No data found</td>
            </tr>
          )}
        </tbody>
      </table>
    </Card>
  );
};

export default CRUD;
