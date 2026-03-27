import { AlertTriangleIcon, ArrowDownIcon, BetweenVerticalEnd, CalendarIcon, ChevronDownIcon, ChevronUpIcon, CloudUpload, DiffIcon, HardDriveUploadIcon, HomeIcon, Layers2Icon, LayoutGrid, MousePointer, PencilLineIcon, RectangleHorizontal, SparkleIcon, TableIcon, UploadIcon, UserIcon } from "lucide-react"
import type { MenuIconProps } from "./menu-item"
import { useLocation } from "react-router"
import { useCollapse } from "@/context/collapse-context";

function useMenu(){
  const location = useLocation();
  const { collapse } = useCollapse();

  return [
    {
      name: "Dashboard",
      href: "/dashboard/components",
      icon: <HomeIcon width={18} height={18} />,
      active: location.pathname === "/dashboard/components",
      children: !collapse ? [
        {
          name: "General",
          href: "/dashboard",
          active: location.pathname === "/dashboard",
          icon: <LayoutGrid width={16} height={16} />,
        },
      ] : []
    },
    {
      name: "Input",
      href: "/dashboard/components/input",
      active: location.pathname === "/dashboard/components/input",
      icon: <PencilLineIcon width={18} height={18} />,
    },
    {
      name: "Calendar",
      href: "/dashboard/components/calendar",
      active: location.pathname === "/dashboard/components/calendar",
      icon: <CalendarIcon width={18} height={18} />,
    },
    {
      name: "Button",
      href: "/dashboard/components/button",
      active: location.pathname === "/dashboard/components/button",
      icon: <ArrowDownIcon width={18} height={18} />,
    },
    {
      name: "Select",
      href: "/dashboard/components/select",
      active: location.pathname === "/dashboard/components/select",
      icon: <MousePointer width={18} height={18} />,
    },
    {
      name: "Stepper",
      href: "/dashboard/components/stepper",
      active: location.pathname === "/dashboard/components/stepper",
      icon: <DiffIcon width={18} height={18} />,
    },
    {
      name: "Accordion",
      href: "/dashboard/components/accordion",
      active: location.pathname === "/dashboard/components/accordion",
      icon: <ChevronDownIcon width={18} height={18} />,
    },
    {
      name: "Alert",
      href: "/dashboard/components/alert",
      active: location.pathname === "/dashboard/components/alert",
      icon: <AlertTriangleIcon width={18} height={18} />,
    },
    {
      name: "Modal Overlay",
      href: "/dashboard/components/modal-overlay",
      active: location.pathname === "/dashboard/components/modal-overlay",
      icon: <Layers2Icon width={18} height={18} />,
    },
    {
      name: "Avatar",
      href: "/dashboard/components/avatar",
      active: location.pathname === "/dashboard/components/avatar",
      icon: <UserIcon width={18} height={18} />,
    },
    {
      name: "Card",
      href: "/dashboard/components/card",
      active: location.pathname === "/dashboard/components/card",
      icon: <RectangleHorizontal width={18} height={18} />,
    },
    {
      name: "File Upload",
      href: "/dashboard/components/file-upload",
      active: location.pathname === "/dashboard/components/file-upload",
      icon: <CloudUpload width={18} height={18} />,
      children: !collapse ? [
        {
          name: "Input",
          href: "/dashboard/components/file-upload/input",
          active: location.pathname === "/dashboard/components/file-upload/input",
          icon: <PencilLineIcon width={16} height={16} />,
        },
        {
          name: "Upload Single",
          href: "/dashboard/components/file-upload/single",
          active: location.pathname === "/dashboard/components/file-upload/single",
          icon: <UploadIcon width={16} height={16} />,
        },
        {
          name: "Upload Multiple",
          href: "/dashboard/components/file-upload/multiple",
          active: location.pathname === "/dashboard/components/file-upload/multiple",
          icon: <HardDriveUploadIcon width={16} height={16} />,
        },
      ] : []
    },
    {
      name: "Tabs",
      href: "/dashboard/components/tabs",
      active: location.pathname === "/dashboard/components/tabs",
      icon: <BetweenVerticalEnd width={18} height={18} />,
    },
    {
      name: "Table",
      href: "/dashboard/components/table",
      active: location.pathname === "/dashboard/components/table",
      icon: <TableIcon width={18} height={18} />,
    },
    {
      name: "Tooltip",
      href: "/dashboard/components/tooltip",
      active: location.pathname === "/dashboard/components/tooltip",
      icon: <ChevronUpIcon width={18} height={18} />,
    },
    {
      name: "Free",
      href: "/dashboard/components/free",
      active: location.pathname === "/dashboard/components/free",
      icon: <SparkleIcon width={18} height={18} />,
    },
  ] as MenuIconProps[]
}

export { useMenu } 