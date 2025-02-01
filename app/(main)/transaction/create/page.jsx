"use server";

import dynamic from 'next/dynamic';
import { getUserAccounts } from "@/actions/dashboard";
import { defaultCategories } from "@/data/categories";
import React from "react";
import AddTransactionForm from "./_components/AddTransactionForm";
import { getTransaction } from "@/actions/transaction";

const AddTransactionPage = async ({ searchParams }) => {
  const accounts = await getUserAccounts();

  const { edit: editId } = searchParams;
  let initialData = null;
  if (editId) {
    const transacton = await getTransaction(editId);
    initialData = transacton;
  }

  return (
    <div className="max-w-3xl mx-auto px-5">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-title mb-5">
       {!!editId ? "Edit Transaction" : "Add Transaction"}
      </h1>

      <AddTransactionForm accounts={accounts} categories={defaultCategories} 
      editMode={!!editId}
      initialData={initialData} />
    </div>
  );
};

export default AddTransactionPage;
