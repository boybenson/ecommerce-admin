"use client";
import { useQueryState } from "next-usequerystate";
import Table from "@/components/Table";
import React from "react";
import Drawer from "@/components/Drawer";
import NewProductForm from "./components/NewProductForm";
import useFetchProducts from "@/hooks/useFetchProducts";
import { tableColumns } from "./components/tableCols";

const Products = () => {
  const { products, loading } = useFetchProducts();
  const [newproduct, setNewProduct] = useQueryState("newproduct");

  const handleOpenNewProductDrawer = () => {
    if (!newproduct) {
      setNewProduct("open");
    } else {
      setNewProduct(null);
    }
  };

  return (
    <>
      <div className="mt-10">
        <Table
          data={products}
          newBtnText="New Product"
          newBtnClickHandler={() => handleOpenNewProductDrawer()}
          columns={tableColumns}
          loading={loading}
        />
      </div>

      <Drawer
        openDrawer={newproduct ? true : false}
        setOpenDrawer={() => setNewProduct(null)}
      >
        <NewProductForm />
      </Drawer>
    </>
  );
};

export default Products;
