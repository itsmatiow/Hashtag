import * as TooltipPrimitive from "@radix-ui/react-tooltip";

export function TooltipProvider({ children }) {
  return (
    <TooltipPrimitive.Provider delayDuration={100}>
      {children}
    </TooltipPrimitive.Provider>
  );
}

export function Tooltip({ children }) {
  return <TooltipPrimitive.Root>{children}</TooltipPrimitive.Root>;
}

export function TooltipTrigger({ children }) {
  return (
    <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
  );
}

export function TooltipContent({ children }) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        side="right"
        sideOffset={8}
        className="animate-in fade-in-0 zoom-in-95 slide-in-from-right-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 font-display z-200 ml-2 rounded-xl bg-black/15 px-6 py-4 text-xl font-extrabold text-black shadow-md backdrop-blur-md duration-300 ease-out data-[state=closed]:duration-200 dark:bg-white/15 dark:text-white"
      >
        {children}
        <TooltipPrimitive.Arrow className="fill-black/15 dark:fill-white/15" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}
