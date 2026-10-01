import React from "react";

import ProfileHeader from "./ProfileHeader";
import PersonalInfo from "./PersonalInfo";
import AccountSecurity from "./AccountSecurity";

export default function Profile() {
  return (
    <main>
      <ProfileHeader />
      <PersonalInfo />
      <AccountSecurity />
    </main>
  );
}
