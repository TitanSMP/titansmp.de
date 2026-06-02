import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="mt-8 text-3xl font-heading leading-tight md:text-4xl">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-8 text-2xl font-heading leading-tight md:text-3xl">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-6 text-xl font-heading leading-tight md:text-2xl">
      {children}
    </h3>
  ),
  hr: () => <hr className="my-8 border-border/50" />,
  table: ({ children }) => (
    <div className="my-6 w-full overflow-x-auto">
      <table className="w-full border-collapse text-sm md:text-base">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-main/10">{children}</thead>,
  th: ({ children }) => (
    <th className="border border-border/40 px-3 py-2 text-left font-heading">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border border-border/40 px-3 py-2 align-top">{children}</td>
  ),
  ul: ({ children }) => (
    <ul className="my-4 list-disc space-y-2 pl-6 text-sm md:text-base">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="my-4 list-decimal space-y-2 pl-6 text-sm md:text-base">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
