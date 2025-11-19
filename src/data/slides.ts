import { WhatsNewSlide } from "../types/whats-new-slide";
import { whatsnew1, whatsnew2, whatsnew3, whatsnew4 } from "./defaults";

export const slides: WhatsNewSlide[] = [
    {
        id: 1,
        title: "Welcome to AppX",
        description: "Discover new features and stay connected effortlessly.",
        image: whatsnew1,
    },
    {
        id: 2,
        title: "Track Your Progress",
        description: "Visualize your daily goals and milestones easily.",
        image: whatsnew2,
    },
    {
        id: 3,
        title: "Stay Notified",
        description: "Get updates, reminders, and more right on time.",
        image: whatsnew3,
    },
    {
        id: 4,
        title: "Ready?",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        image: whatsnew4,
    },
];
