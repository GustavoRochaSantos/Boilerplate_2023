import { CRUDConfig, Field } from "./types";

export const fieldGenerator = (props: Field) => {


}

export interface ColumnsName {
  name: string,
  label: string,
  order: boolean,
}

export const columnsNameGenerator = (config: CRUDConfig) => {
  return config.fields.reduce((columns, field) => {
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

}