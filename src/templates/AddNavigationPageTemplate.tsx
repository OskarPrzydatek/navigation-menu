import { BackLink } from "@/components";
import React from "react";

export const AddNavigationPageTemplate = () => {
  return (
    <div className="p-4">
      <header className="flex flex-col gap-y-4">
        <BackLink href={"/"} label={"Wróć do listy nawigacji"} />

        <h2 className="text-3xl font-semibold">Dodaj nawigację</h2>
      </header>

      {/* TODO: Add page content */}
      <main></main>
    </div>
  );
};
