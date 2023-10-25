"use client";
import { useQueryState } from "next-usequerystate";
import Table from "@/components/Table";
import React from "react";
import Drawer from "@/components/Drawer";
import NewProductForm from "./components/NewProductForm";

const Products = () => {
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
          newBtnText="New Product"
          newBtnClickHandler={() => handleOpenNewProductDrawer()}
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
