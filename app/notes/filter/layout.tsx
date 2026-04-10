type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  modal: React.ReactNode;
};

export default function NotesLayout({
  children,
  sidebar,
  modal,
}: Props) {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <aside>{sidebar}</aside>
      <main>{children}</main>
      {modal}
    </div>
  );
}