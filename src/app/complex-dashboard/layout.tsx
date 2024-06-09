import { ReactNode } from "react";

export default function dashboarLayout({
  children,
  notifications,
  users
}: {
  children: ReactNode;
  notifications: ReactNode;
  users: ReactNode;
}) {
  return (
    <div className="w-full">
      {/* {children} */}
      <div className="p-2">
        {users}
      </div>

      <div className="p-2">
        {notifications}
      </div>
    </div>
  );
}
