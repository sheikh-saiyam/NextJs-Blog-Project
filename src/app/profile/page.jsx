import {
  getKindeServerSession,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Profile = async () => {
  const { isAuthenticated } = getKindeServerSession();
  return (await isAuthenticated()) ? (
    <div>
      This page is protected - but you can view it because you are authenticated
    </div>
  ) : (
    redirect("/api/auth/login")
  );
};

export default Profile;
