"use client";

import * as React from "react";
import Link from "next/link";
import {
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
} from "./navigation-menu-1";
import { Building2, Compass, Home, Layers } from "lucide-react";

export function NavigationMenuDemo() {
  return (
    <div className="flex w-full justify-center p-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent className="w-[400px] p-4">
              <div className="grid gap-3">
                <NavigationMenuLink href="/services#construction">
                  <div className="flex items-center gap-2 font-medium text-[#800020]">
                    <Building2 className="h-4 w-4" />
                    <span>Construction Services</span>
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">
                    Specialized engineering, compressed earth brick systems and commercial building.
                  </p>
                </NavigationMenuLink>
                <NavigationMenuLink href="/services#property-management">
                  <div className="flex items-center gap-2 font-medium text-[#800020]">
                    <Layers className="h-4 w-4" />
                    <span>Property Management</span>
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">
                    Asset care, facility preservation and infrastructure maintenance.
                  </p>
                </NavigationMenuLink>
                <NavigationMenuLink href="/services#general-contracting">
                  <div className="flex items-center gap-2 font-medium text-[#800020]">
                    <Compass className="h-4 w-4" />
                    <span>General Contracting</span>
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">
                    Full-scope project management, structural execution and site oversight.
                  </p>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
            <NavigationMenuContent className="w-[400px] p-4">
              <div className="grid gap-3">
                <NavigationMenuLink href="/projects#residential">
                  <div className="flex items-center gap-2 font-medium text-[#800020]">
                    <Home className="h-4 w-4" />
                    <span>Residential</span>
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">
                    Sustainable homes and barracks developments across Nigeria.
                  </p>
                </NavigationMenuLink>
                <NavigationMenuLink href="/projects#infrastructure">
                  <div className="flex items-center gap-2 font-medium text-[#800020]">
                    <Building2 className="h-4 w-4" />
                    <span>Infrastructure & Institutional</span>
                  </div>
                  <p className="text-xs text-neutral-500 mt-1">
                    Institutional complexes, auditoriums and military facilities.
                  </p>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/contact" className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuPortal>
          <NavigationMenuPositioner>
            <NavigationMenuPopup>
              <NavigationMenuViewport />
            </NavigationMenuPopup>
          </NavigationMenuPositioner>
        </NavigationMenuPortal>
      </NavigationMenu>
    </div>
  );
}

