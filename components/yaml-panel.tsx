"use client";

import { useState } from "react";

type YamlTab = "source" | "payaml";

export function YamlPanel({
  sourceCode,
  paYaml,
}: {
  sourceCode: string;
  paYaml: string;
}) {
  const [tab, setTab] = useState<YamlTab>("source");
  const [copied, setCopied] = useState(false);
  const code = tab === "source" ? sourceCode : paYaml;

  async function copy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-4 py-2.5">
        <div className="flex gap-1 rounded-lg bg-background p-0.5">
          <TabButton active={tab === "source"} onClick={() => setTab("source")}>
            Source Code
          </TabButton>
          <TabButton active={tab === "payaml"} onClick={() => setTab("payaml")}>
            PaYaml
          </TabButton>
        </div>
        <button
          type="button"
          onClick={copy}
          className="rounded-md border border-border bg-surface-2 px-3 py-1 text-[12px] text-foreground transition-colors hover:border-accent/40 hover:text-accent"
        >
          {copied ? "Copied" : "Copy YAML"}
        </button>
      </div>
      <pre className="max-h-[28rem] overflow-auto p-5 text-[12.5px] leading-6 text-accent/90">
        <code className="font-mono">{code}</code>
      </pre>
    </div>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-md px-3 py-1 text-[12px] tracking-wide transition-colors ${
        active
          ? "bg-surface-2 text-foreground"
          : "text-muted hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}
