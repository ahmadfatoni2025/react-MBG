import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Settings, 
  Wrench, 
  FolderOpen, 
  BarChart3, 
  Table,
  ChevronDown,
  Smile,
  Menu,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const Sidebar = ({ isOpen, onToggle }: SidebarProps) => {
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const toggleMenu = (menuId: string) => {
    setOpenMenus(prev =>
      prev.includes(menuId)
        ? prev.filter(id => id !== menuId)
        : [...prev, menuId]
    );
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-foreground/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:static inset-y-0 left-0 z-50 w-64 bg-gradient-primary transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Brand */}
          <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
            <Link to="/" className="flex items-center gap-3">
              <div className="transform -rotate-15">
                <Smile className="w-8 h-8 text-sidebar-foreground" />
              </div>
              <div className="text-sidebar-foreground font-bold text-xl">
                Database MBG
              </div>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-sidebar-foreground hover:bg-sidebar-accent"
              onClick={onToggle}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-3 space-y-1">
            {/* Dashboard */}
            <Link
              to="/"
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sidebar-foreground transition-colors",
                isActive("/")
                  ? "bg-sidebar-accent"
                  : "hover:bg-sidebar-accent/50"
              )}
            >
              <LayoutDashboard className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>

            <div className="h-px bg-sidebar-border my-3" />

            {/* Interface Section */}
            <div className="px-3 py-2 text-sidebar-foreground/60 text-xs font-semibold uppercase">
              Interface
            </div>

            {/* Components Menu */}
            <Collapsible open={openMenus.includes("components")}>
              <CollapsibleTrigger
                onClick={() => toggleMenu("components")}
                className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Settings className="w-5 h-5" />
                  <span>Components</span>
                </div>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform",
                    openMenus.includes("components") && "rotate-180"
                  )}
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="ml-8 mt-1 space-y-1">
                <Link
                  to="/buttons"
                  className="block px-3 py-2 text-sm text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent/30 rounded-lg transition-colors"
                >
                  Buttons
                </Link>
                <Link
                  to="/cards"
                  className="block px-3 py-2 text-sm text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent/30 rounded-lg transition-colors"
                >
                  Cards
                </Link>
              </CollapsibleContent>
            </Collapsible>

            {/* Utilities Menu */}
            <Collapsible open={openMenus.includes("utilities")}>
              <CollapsibleTrigger
                onClick={() => toggleMenu("utilities")}
                className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Wrench className="w-5 h-5" />
                  <span>Utilities</span>
                </div>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform",
                    openMenus.includes("utilities") && "rotate-180"
                  )}
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="ml-8 mt-1 space-y-1">
                <Link
                  to="/colors"
                  className="block px-3 py-2 text-sm text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent/30 rounded-lg transition-colors"
                >
                  Colors
                </Link>
                <Link
                  to="/borders"
                  className="block px-3 py-2 text-sm text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent/30 rounded-lg transition-colors"
                >
                  Borders
                </Link>
                <Link
                  to="/animations"
                  className="block px-3 py-2 text-sm text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent/30 rounded-lg transition-colors"
                >
                  Animations
                </Link>
              </CollapsibleContent>
            </Collapsible>

            <div className="h-px bg-sidebar-border my-3" />

            {/* Addons Section */}
            <div className="px-3 py-2 text-sidebar-foreground/60 text-xs font-semibold uppercase">
              Addons
            </div>

            {/* Pages Menu */}
            <Collapsible open={openMenus.includes("pages")}>
              <CollapsibleTrigger
                onClick={() => toggleMenu("pages")}
                className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <FolderOpen className="w-5 h-5" />
                  <span>Pages</span>
                </div>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform",
                    openMenus.includes("pages") && "rotate-180"
                  )}
                />
              </CollapsibleTrigger>
              <CollapsibleContent className="ml-8 mt-1 space-y-1">
                <div className="px-3 py-1 text-xs text-sidebar-foreground/60 font-semibold">
                  Login Screens
                </div>
                <Link
                  to="/login"
                  className="block px-3 py-2 text-sm text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent/30 rounded-lg transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block px-3 py-2 text-sm text-sidebar-foreground/80 hover:text-sidebar-foreground hover:bg-sidebar-accent/30 rounded-lg transition-colors"
                >
                  Register
                </Link>
              </CollapsibleContent>
            </Collapsible>

            {/* Charts */}
            <Link
              to="/charts"
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sidebar-foreground transition-colors",
                isActive("/charts")
                  ? "bg-sidebar-accent"
                  : "hover:bg-sidebar-accent/50"
              )}
            >
              <BarChart3 className="w-5 h-5" />
              <span>Charts</span>
            </Link>

            {/* Tables */}
            <Link
              to="/tables"
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sidebar-foreground transition-colors",
                isActive("/tables")
                  ? "bg-sidebar-accent"
                  : "hover:bg-sidebar-accent/50"
              )}
            >
              <Table className="w-5 h-5" />
              <span>Tables</span>
            </Link>
          </nav>
        </div>
      </aside>
    </>
  );
};
