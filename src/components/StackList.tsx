export function StackList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] tracking-wide text-muted uppercase"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
