import React from "react";

interface Titles {
  form?: string;
  listing?: string;
  report?: string;
}

interface FieldBehavior {
  include?: boolean;
  hidden?: boolean;
}

export interface Field {
  type: "action" | "string" | "number" | "date";
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

export interface ListingType {
  actions?: React.ReactNode[];
  includeInsert?: boolean;
  grid?: {
    includeUpdate?: boolean;
    includeDelete?: boolean;
    actions?: {
      name: string;
      label?: string;
      action?: () => any;
    }[];
  };
}
export interface CRUDConfig {
  entitySingular: string;
  entityPlural: string;
  listing?: ListingType;
  fields: Field[];
  services?: {};
}
