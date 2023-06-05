export default function Section({ title, children }) {
  return (
    <section title={title}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
