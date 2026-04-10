export default function Layout({
  children,
  notes,
  sidebar,
}: {
  children: React.ReactNode;
  notes: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <aside>{sidebar}</aside>

      <main style={{ flex: 1 }}>
        {children}
        {notes}
      </main>
    </div>
  );
}