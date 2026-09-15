const steps = [
  { label: "Request", state: "done" },
  { label: "Review", state: "current" },
  { label: "Build", state: "todo" },
  { label: "Ship", state: "todo" },
] as const;

export function TimelineStepperPreview() {
  return (
    <ol className="flex w-full max-w-md items-start">
      {steps.map((step, index) => {
        const done = step.state === "done";
        const current = step.state === "current";
        return (
          <li key={step.label} className="flex flex-1 flex-col items-center">
            <div className="flex w-full items-center">
              <div
                className={`h-px flex-1 ${index === 0 ? "bg-transparent" : done || current ? "bg-accent/70" : "bg-border"}`}
              />
              <span
                className={`flex size-3.5 items-center justify-center rounded-full border ${
                  done
                    ? "border-accent bg-accent"
                    : current
                      ? "border-accent bg-background"
                      : "border-border bg-surface"
                }`}
              >
                {done ? (
                  <span className="size-1.5 rounded-full bg-background" />
                ) : current ? (
                  <span className="size-1.5 rounded-full bg-accent" />
                ) : null}
              </span>
              <div
                className={`h-px flex-1 ${index === steps.length - 1 ? "bg-transparent" : done ? "bg-accent/70" : "bg-border"}`}
              />
            </div>
            <span
              className={`mt-2.5 text-[11px] tracking-wide ${current ? "text-foreground" : "text-muted"}`}
            >
              {step.label}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
