export default function FilterLayout({
  children,
  notes,
  sidebar,
}: {
  children: React.ReactNode;
  notes: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex" }}>
      <aside>{sidebar}</aside>
      <main>{notes}</main>
    </div>
  );
}