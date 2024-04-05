"use client";
import React from "react";
import { Pagination } from ".";
import { ColumnsName } from "../object/crud/generator";

interface Params {
  columnsName: ColumnsName[];
  data: any[];
  extraActions?: React.ReactNode[];
  extraGridActions?: {
    name: string;
    action: (id: string) => React.ReactNode;
  }[];
}

const Table = ({ columnsName, data, extraGridActions }: Params) => {
  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 border border-gray-200 dark:border-gray-700 md:rounded-lg overflow-hidden ">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            {columnsName.map((column) => (
              <th className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                {column.order ? (
                  <button className="flex items-center gap-x-3 focus:outline-none">
                    <span>{column.label}</span>

                    <div>image</div>
                  </button>
                ) : (
                  column.label
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
          {data && data.length > 0 ? (
            data.map((row: any) => (
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-600">
                {extraGridActions?.map((item) => item?.action(row.id))}
                {columnsName
                  .filter((column) => column)
                  .map((column: ColumnsName) => (
                    <td className="px-4 py-4 text-sm font-medium whitespace-nowrap ">
                      {row[column.name]}
                    </td>
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
      <Pagination />
    </div>
  );
};

export default Table;
