"use client";

import { Button } from "@/components";
import React from "react";

import { useRouter } from "next/navigation";

export const HomePageTemplate = () => {
  const router = useRouter();

  const onClickNavigateToAddNavigation = () => router.push("/navigation/add");

  return (
    <div className="p-4">
      <header>
        <Button
          label="Dodaj Nawigację"
          variant="secondary"
          onClick={onClickNavigateToAddNavigation}
        />
      </header>

      {/* TODO: Add page content */}
      <main></main>
    </div>
  );
};
