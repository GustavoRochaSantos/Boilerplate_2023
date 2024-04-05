"use client";
import { Card, Table } from "@/components";
import { ColumnsName, columnsNameGenerator } from "./generator";
import { CRUDConfig } from "./types";
import { PencilSimple } from "@phosphor-icons/react";
import { Trash } from "@phosphor-icons/react/dist/ssr";
import Listing from "./listing";

interface Params {
  config: CRUDConfig;
}

const CRUD = ({ config }: Params) => {
  return (
    <Card title={`Consulta de ${config.entityPlural}`}>
      <Listing config={config} />
    </Card>
  );
};

export default CRUD;
