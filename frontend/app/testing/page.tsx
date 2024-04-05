import { Button } from "@/components";
import CRUD from "@/components/object/crud";
import { CRUDConfig, Field } from "@/components/object/crud/types";
import { FloppyDisk, Disc } from "@phosphor-icons/react/dist/ssr";
import React from "react";

interface Params {}

const fields: Field[] = [
  {
    type: "string",
    name: "id",
    label: "Id",
    form: {
      include: true,
    },
    listing: {
      grid: {
        include: true,
      },
      filter: {
        include: true,
      },
    },
  },
  {
    type: "string",
    name: "title",
    label: "Título",
    form: {
      include: true,
      required: true,
    },
    listing: {
      grid: {
        include: true,
        order: true,
      },
      filter: {
        include: true,
      },
    },
  },
];

const crud: CRUDConfig = {
  entitySingular: "Cliente",
  entityPlural: "Clientes",
  titles: {
    form: "Cadastro de ",
    listing: "Consulta de ",
  },
  fields,
};

const TestingPage = ({}: Params) => {
  return (
    <div>
      <h1>Teste basico</h1>
      <div className="flex ">
        <Button>Teste</Button>
        <Button loading>Teste</Button>
        <Button icon={<FloppyDisk />} iconPosition="before">
          Teste
        </Button>
        <Button type="secondary">Testefsdaf dfas adfasf</Button>
      </div>

      <CRUD config={crud} />
    </div>
  );
};

export default TestingPage;
