import React from "react";
import { Avatar } from "@/components";

import "./UserMenu.scss";

export function UserMenu() {

    const classes = {
        root: "uiUserMenu"
    };

    return (
        <div className={classes.root}>
            <Avatar />
        </div>
    );
}