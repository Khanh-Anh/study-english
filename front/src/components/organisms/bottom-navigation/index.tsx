'use client'
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";

export default function BottomNav() {
    const [value, setValue] = useState(0);
    return (
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        >
            <BottomNavigationAction label="Recents" />
            <BottomNavigationAction label="Favorites" />
            <BottomNavigationAction label="Nearby" />
        </BottomNavigation>
    );
}
