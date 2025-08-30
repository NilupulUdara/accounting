import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import LayersIcon from "@mui/icons-material/Layers";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import SpaIcon from "@mui/icons-material/Spa";
import ForestIcon from "@mui/icons-material/Forest";
import ScienceIcon from "@mui/icons-material/Science";
import EmergencyIcon from "@mui/icons-material/Emergency";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import FolderIcon from "@mui/icons-material/Folder";
import ConstructionIcon from "@mui/icons-material/Construction";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import PersonRemoveOutlinedIcon from "@mui/icons-material/PersonRemoveOutlined";
import DatasetLinkedOutlinedIcon from "@mui/icons-material/DatasetLinkedOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import KeyIcon from "@mui/icons-material/Key";

export interface SidebarItem {
  title?: string;
  headline?: string;
  icon?: JSX.Element;
  open?: boolean;
  href?: string;
  disabled?: boolean;
  accessKey?: string;
  nestedItems?: {
    title: string;
    href: string;
    icon?: JSX.Element;
    accessKey?: string;
    open?: boolean;
    disabled?: boolean;
    nestedItems?: {
      accessKey?: string;
      title: string;
      href: string;
      icon: JSX.Element;
      disabled?: boolean;
    }[];
  }[];
}

export const sidebarItems: Array<SidebarItem> = [
  
      {
        title: "Sales",
        href: "/sales",
        icon: <DashboardIcon fontSize="small" />,
        nestedItems: [
          {
            title: "Transactions",
            href: "/sales/transactions",
            icon: <LayersIcon fontSize="small" />,
          },
          {
            title: "Inquiries and Reports",
            href: "/sales/inquiriesandreports",
            icon: <QueryStatsIcon fontSize="small" />,
          },
          {
            title: "Maintenance",
            href: "/sales/maintenance",
            icon: <ConstructionIcon fontSize="small" />,
          },
        ],
      },
      {
        title: "Purchase",
        href: "/purchase",
        icon: <ForestIcon fontSize="small" />,
      },
      {
        title: "Item and inventory",
        href: "/itemandinventory",
        icon: <FolderIcon fontSize="small" />,
      },
      {
        title: "Manufacturing",
        href: "/manufacturing",
        icon: <ScienceIcon fontSize="small" />,
      },
      {
        title: "Fixed Assets",
        href: "/fixedassets",
        icon: <EmergencyIcon fontSize="small" />,
      },
      {
        title: "Dimension",
        href: "/dimension",
        icon: <ChangeHistoryIcon fontSize="small" />,
      },
      {
        title: "Banking And General ledger",
        href: "/bankingandgeneralledger",
        icon: <PeopleAltIcon fontSize="small" />,
      },
      {
        title: "Setup",
        href: "/setup",
        icon: <SettingsOutlinedIcon fontSize="small" />,
      },
    
];