import * as React from "react";
import Link from "next/link";
import type { GuideBlock } from "@/data/guide-types";

const LINK = /\[([^\]]+)\]\(([^)]+)\)/g;
const BOLD = /\*\*([^*]+)\*\*/g;

/** Turns "**bold**" into bold text. */
function Bold({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  let last = 0;
  let key = 0;
  for (const match of text.matchAll(BOLD)) {
    const at = match.index ?? 0;
    if (at > last) parts.push(text.slice(last, at));
    parts.push(
      <strong key={key++} className="font-bold text-black">
        {match[1]}
      </strong>,
    );
    last = at + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return <>{parts}</>;
}

/** Turns "[label](/path)" in plain text into links. Internal paths use Next links, external ones open safely. */
function Rich({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  let last = 0;
  let key = 0;
  for (const match of text.matchAll(LINK)) {
    const [full, label, href] = match;
    const at = match.index ?? 0;
    if (at > last) parts.push(<Bold key={`b${key++}`} text={text.slice(last, at)} />);
    const cls = "text-[#800020] underline underline-offset-4 transition-colors hover:text-black";
    parts.push(
      href.startsWith("/") ? (
        <Link key={key++} href={href} className={cls}>
          {label}
        </Link>
      ) : (
        <a key={key++} href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {label}
        </a>
      ),
    );
    last = at + full.length;
  }
  if (last < text.length) parts.push(<Bold key={`b${key++}`} text={text.slice(last)} />);
  return <>{parts}</>;
}

const body = "font-[Urbanist] text-[17px] font-medium leading-[165%] text-black/80 sm:text-[18px]";

export function GuideBlocks({ blocks }: { blocks: GuideBlock[] }) {
  return (
    <div className="flex flex-col gap-5">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <React.Fragment key={i}>
                <h2
                  id={block.id}
                  className="mt-10 scroll-mt-28 font-heading text-[28px] font-bold uppercase leading-[1.02] tracking-tight text-black sm:text-[36px]"
                >
                  {block.text}
                </h2>
                {block.answer && (
                  <p className="border-l-4 border-[#800020] pl-5 font-[Urbanist] text-[18px] font-semibold leading-[155%] text-black sm:text-[20px]">
                    <Rich text={block.answer} />
                  </p>
                )}
              </React.Fragment>
            );
          case "h3":
            return (
              <h3 key={i} className="mt-4 font-heading text-[22px] font-bold uppercase leading-[1.05] text-black sm:text-[26px]">
                {block.text}
              </h3>
            );
          case "p":
            return (
              <p key={i} className={body}>
                <Rich text={block.text} />
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="flex flex-col gap-2.5">
                {block.items.map((item) => (
                  <li key={item} className={`${body} flex gap-3`}>
                    <span aria-hidden="true" className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#800020]" />
                    <span>
                      <Rich text={item} />
                    </span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="flex flex-col gap-4">
                {block.items.map((item, n) => (
                  <li key={item} className="grid grid-cols-[44px_1fr] items-baseline gap-x-2 border-t border-black/10 pt-4">
                    <span className="font-heading text-[26px] font-bold leading-none text-[#800020]">{n + 1}</span>
                    <span className={body}>
                      <Rich text={item} />
                    </span>
                  </li>
                ))}
              </ol>
            );
          case "note":
            return (
              <aside key={i} className="rounded-[14px] border border-black/10 bg-white p-6">
                <p className="font-heading text-[18px] font-bold uppercase leading-none text-[#800020]">{block.title}</p>
                <p className="mt-3 font-[Urbanist] text-[16px] font-medium leading-[160%] text-black/75">
                  <Rich text={block.text} />
                </p>
              </aside>
            );
          case "table":
            return (
              <div key={i} className="overflow-x-auto rounded-[14px] border border-black/10 bg-white">
                <table className="w-full min-w-[640px] border-collapse text-left font-[Urbanist] text-[15px]">
                  <caption className="px-4 pb-1 pt-4 text-left font-heading text-[18px] font-bold uppercase text-black">
                    {block.caption}
                  </caption>
                  <thead>
                    <tr className="border-b border-black/15">
                      {block.headers.map((h) => (
                        <th key={h} scope="col" className="px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#800020]">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row) => (
                      <tr key={row[0]} className="border-b border-black/10 last:border-0 align-top">
                        {row.map((cell, c) =>
                          c === 0 ? (
                            <th key={c} scope="row" className="px-4 py-3 font-bold text-black">
                              {cell}
                            </th>
                          ) : (
                            <td key={c} className="px-4 py-3 font-medium leading-[150%] text-black/80">
                              <Rich text={cell} />
                            </td>
                          ),
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
                {block.foot && <p className="border-t border-black/10 px-4 py-3 text-sm font-medium text-black/65">{block.foot}</p>}
              </div>
            );
        }
      })}
    </div>
  );
}
