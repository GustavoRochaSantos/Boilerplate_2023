interface Titles {
  form?: string;
  listing?: string;
  report?: string;
}

enum FieldType {
  string,
  number,
  date,
}

interface FieldBehavior {
  include?: boolean;
  hidden?: boolean;
}

export interface Field {
  type: "string" | "number" | "date";
  name: string;
  label?: string;
  form?: FieldBehavior & {
    required?: boolean;
    validation?: (props: any) => Promise<any>;
    parse?: (props: any) => Promise<any>;
    format?: (props: any) => Promise<any>;
  };
  listing?: {
    grid?: FieldBehavior & {
      order?: boolean;
      fixedLeft?: boolean;
      fixedRight?: boolean;
    };
    filter?: FieldBehavior;
  };
}

export interface CRUDConfig {
  entitySingular: string;
  entityPlural: string;
  titles: Titles;
  fields: Field[];
  services?: {};
}
