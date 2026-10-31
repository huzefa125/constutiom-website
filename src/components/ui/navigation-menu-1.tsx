"use client";

import * as React from "react";
import { NavigationMenu as BaseNavigationMenu } from "@base-ui-components/react/navigation-menu";
import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navigationMenuTriggerStyle = cva(
  "group inline-flex h-10 w-max items-center justify-center rounded-none px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#242424] transition-colors hover:text-[#800020] focus:text-[#800020] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-[#800020] cursor-pointer"
);

const NavigationMenu = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<typeof BaseNavigationMenu.Root>
>(({ className, children, ...props }, ref) => (
  <BaseNavigationMenu.Root
    ref={ref}
    className={cn(
      "relative z-40 flex max-w-max flex-1 items-center justify-center",
      className
    )}
    {...props}
  >
    {children}
  </BaseNavigationMenu.Root>
));
NavigationMenu.displayName = "NavigationMenu";

const NavigationMenuList = React.forwardRef<
  HTMLUListElement,
  React.ComponentPropsWithoutRef<typeof BaseNavigationMenu.List>
>(({ className, ...props }, ref) => (
  <BaseNavigationMenu.List
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    )}
    {...props}
  />
));
NavigationMenuList.displayName = "NavigationMenuList";

const NavigationMenuItem = BaseNavigationMenu.Item;

const NavigationMenuTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof BaseNavigationMenu.Trigger>
>(({ className, children, ...props }, ref) => (
  <BaseNavigationMenu.Trigger
    ref={ref}
    className={cn(navigationMenuTriggerStyle(), "gap-1.5", className)}
    {...props}
  >
    {children}
    <ChevronDown
      className="relative top-[1px] h-3.5 w-3.5 transition-transform duration-200 group-data-[open]:rotate-180 text-neutral-500 group-hover:text-[#800020]"
      aria-hidden="true"
    />
  </BaseNavigationMenu.Trigger>
));
NavigationMenuTrigger.displayName = "NavigationMenuTrigger";

const NavigationMenuPositioner = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseNavigationMenu.Positioner>
>(({ className, ...props }, ref) => (
  <BaseNavigationMenu.Positioner
    ref={ref}
    sideOffset={12}
    className={cn("z-50 focus:outline-none", className)}
    {...props}
  />
));
NavigationMenuPositioner.displayName = "NavigationMenuPositioner";

const NavigationMenuPopup = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<typeof BaseNavigationMenu.Popup>
>(({ className, ...props }, ref) => (
  <BaseNavigationMenu.Popup
    ref={ref}
    className={cn(
      "relative z-50 rounded-none border border-[#E9E5DF] bg-[#FAF9F6] text-[#242424] shadow-2xl focus:outline-none transition-all duration-200",
      className
    )}
    {...props}
  />
));
NavigationMenuPopup.displayName = "NavigationMenuPopup";

const NavigationMenuContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof BaseNavigationMenu.Content>
>(({ className, ...props }, ref) => (
  <BaseNavigationMenu.Content
    ref={ref}
    className={cn(
      "w-[440px] p-5 focus:outline-none bg-[#FAF9F6]",
      className
    )}
    {...props}
  />
));
NavigationMenuContent.displayName = "NavigationMenuContent";

const NavigationMenuLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<typeof BaseNavigationMenu.Link>
>(({ className, ...props }, ref) => (
  <BaseNavigationMenu.Link
    ref={ref}
    className={cn(
      "block select-none rounded-none p-3 leading-none no-underline outline-none transition-colors hover:bg-[#F4F1EA] hover:text-[#800020] focus:bg-[#F4F1EA] focus:text-[#800020]",
      className
    )}
    {...props}
  />
));
NavigationMenuLink.displayName = "NavigationMenuLink";

const NavigationMenuPortal = BaseNavigationMenu.Portal;
const NavigationMenuViewport = BaseNavigationMenu.Viewport;

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuPopup,
  NavigationMenuPositioner,
  NavigationMenuPortal,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
};
