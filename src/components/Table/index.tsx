"use client";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnDef,
  FilterFn,
} from "@tanstack/react-table";
import { RankingInfo, rankItem } from "@tanstack/match-sorter-utils";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useMemo, useState } from "react";

const people = [
  {
    name: "Test Developer",
    title: "Q/A",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "Q/A Engineer",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Net Ninja",
    title: "Software Engineer",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "fullstack developer",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Larry Lance",
    title: "Product Manager",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "project manager",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Elon Musk",
    title: "CEO",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "Member",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];
declare module "@tanstack/table-core" {
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
  }
  interface FilterMeta {
    itemRank: RankingInfo;
  }
}

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value);
  addMeta({
    itemRank,
  });
  return itemRank.passed;
};

type Iprops = {
  newBtnText?: string;
  newBtnClickHandler?: any;
  data: any;
  columns: any;
  loading: boolean;
};

const Table = ({
  newBtnText,
  newBtnClickHandler,
  data,
  columns,
  loading,
}: Iprops) => {
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: (row, columnId, filterValue) => {
      const safeValue: any = (() => {
        const value = row.getValue(columnId);
        return typeof value === "number" ? String(value) : value;
      })();

      return safeValue?.toLowerCase().includes(filterValue.toLowerCase());
    },
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2  sm:px-6 lg:px-8 border border-gray-100 shadow">
            <div className="p-3">
              <div className="w-full flex justify-end space-x-3">
                {newBtnText && (
                  <button
                    onClick={newBtnClickHandler}
                    className="border border-main_pink text-main_pink flex items-center space-x-1 p-2 rounded-lg"
                  >
                    <span>{newBtnText}</span>
                  </button>
                )}
                <button className="border border-gray-400 bg-main_pink text-white flex items-center space-x-1 p-2 rounded-lg">
                  <ArrowDownTrayIcon className="w-4 h-6" />
                  <span>save as csv</span>
                </button>
                <div className="border border-gray-400 flex items-center rounded-lg px-2 space-x-2">
                  <MagnifyingGlassIcon className="w-6 h-6" />

                  <DebouncedInput
                    value={globalFilter ?? ""}
                    onChange={(value) => setGlobalFilter(String(value))}
                    className="p-2 font-lg shadow border border-block"
                    placeholder="Search all columns..."
                  />
                </div>
              </div>
            </div>
            <table className="min-w-full divide-y divide-gray-300 text-left">
              <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className="py-3.5 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-0"
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;

function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <input
      {...props}
      value={value}
      className="outline-none"
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
