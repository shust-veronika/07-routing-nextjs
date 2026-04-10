import React from "react";

interface FilterLayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  notes: React.ReactNode;
}

export default function FilterLayout({
  children,
  sidebar,
  notes,
}: FilterLayoutProps) {
  return (
    <div style={{ display: "flex" }}>
      {children}
      {sidebar}
      {notes}
    </div>
  );
}