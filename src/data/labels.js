import {
  CategoriesIcon,
  DraftIcon,
  InboxIcon,
  SentIcon,
  SnoozedIcon,
  SpamIcon,
  StarredIcon,
  TrashIcon,
} from "../assets/svg";

export const labels = [
  {
    id: 1,
    title: "Inbox",
    unreadCount: 3,
    icon: InboxIcon,
  },
  {
    id: 2,
    title: "Starred",
    icon: StarredIcon,
  },
  {
    id: 3,
    title: "Snoozed",
    icon: SnoozedIcon,
  },
  {
    id: 4,
    title: "Sent",
    icon: SentIcon,
  },
  {
    id: 5,
    title: "Drafts",
    unreadCount: 1,
    icon: DraftIcon,
  },
  {
    id: 6,
    title: "Spam",
    isActive: false,
    unreadCount: 3,
    icon: SpamIcon,
  },
  {
    id: 7,
    title: "Trash",
    isActive: false,
    icon: TrashIcon,
  },
  {
    id: 8,
    title: "Categories",
    isActive: false,
    icon: CategoriesIcon,
  },
];
