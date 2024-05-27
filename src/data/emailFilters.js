import { CommunityIcon, InfoIcon, TagIcon } from "../assets/svg";

export const emailFilters = [
  {
    id: 1,
    title: "Primary",
    icon: CommunityIcon,
    color: "#C84031",
    isActive: true,
  },
  {
    id: 2,
    title: "Social",
    icon: CommunityIcon,
    color: "#3474E0",
    customMessage: "Nextdoor, Message fro...",
    unreadCount: 1,
  },
  {
    id: 3,
    title: "Promotions",
    icon: TagIcon,
    color: "#3C7D40",
    customMessage: "Lowe’s Home Improvement",
    unreadCount: 6,
  },
  {
    id: 4,
    title: "Updates",
    icon: InfoIcon,
    color: "#0000008A",
  },
];
