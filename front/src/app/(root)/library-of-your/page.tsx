import LibraryOfYour from "@/pages/library";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Study",
    description: "Study",
};

export default function Library() {
    return (
        <>
            <LibraryOfYour />
        </>
    );
}
