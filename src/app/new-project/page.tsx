"use client";

import { PaymentCard } from "@/components/PaymentCard";

export default async function NewProject() {
  return (
    <div className="flex flex-wrap justify-center">
      <PaymentCard type="plan" />
      <PaymentCard type="free" />
    </div>
  );
}
