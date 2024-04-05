import { Button, Input, Table } from "@/components";
import {
  MagnifyingGlass,
  PencilSimple,
  Trash,
} from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { CRUDConfig } from "../types";
import { ColumnsName, columnsNameGenerator } from "../generator";

interface Params {
  config: CRUDConfig;
}

const Listing = ({ config }: Params) => {
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

  const columnsName = (): ColumnsName[] => {
    const columns = [];
    if (config.listing?.grid?.includeUpdate) {
      columns.push("");
    }
    if (config.listing?.grid?.includeDelete) {
      columns.push("");
    }

    return [...columns, ...columnsNameGenerator(config)];
  };

  const extraGridActions = () => {
    const actions = [];
    if (config.listing?.grid?.includeUpdate) {
      actions.push({ name: "update", action: updateAction });
    }
    if (config.listing?.grid?.includeDelete) {
      actions.push({ name: "delete", action: deleteAction });
    }

    return actions;
  };

  const handleUpdate = (id: string) => {
    console.log("ALTERANDO....", id);
  };

  const handleDelete = (id: string) => {
    console.log("DELETANDO....", id);
  };

  const handleInsert = () => {
    console.log("INSERINDO....");
  };

  const updateAction = (id: string) => {
    return (
      <td className="grid_icon">
        <div>
          <PencilSimple onClick={() => handleUpdate(id)} />
        </div>
      </td>
    );
  };

  const deleteAction = (id: string) => {
    return (
      <td className="grid_icon">
        <div>
          <Trash onClick={() => handleDelete(id)} />
        </div>
      </td>
    );
  };

  return (
    <div>
      <section className="relative mb-4 flex justify-between items-center">
        <Input
          type="text"
          id="table-search"
          placeholder="Pesquisar"
          icon={<MagnifyingGlass size={20} />}
          className="w-[400px]"
        />
        <div data-test="extra-actions" className="flex">
          {config.listing?.actions &&
            config.listing?.actions.map((action) => action)}
          {config.listing?.includeInsert && (
            <Button onClick={handleInsert}>Novo</Button>
          )}
        </div>
      </section>
      <Table
        data={data}
        columnsName={columnsName()}
        extraGridActions={extraGridActions()}
      />
    </div>
  );
};

export default Listing;
