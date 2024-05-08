"use client";

import { Widget } from "@typeform/embed-react";
import { notFound } from "next/navigation";

export default function NewProject() {
  const apiKey = process.env.NEXT_PUBLIC_TYPEFORM_API_KEY;
  if (!apiKey) return notFound();

  return (
    <Widget
      id={apiKey}
      style={{ width: "100%", height: "80vh", marginTop: 14 }}
      className="-mt-10"
    />
  );
}
