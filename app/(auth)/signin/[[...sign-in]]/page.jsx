import { SignIn } from "@clerk/nextjs";
import AuthLayout from "../../layout";

const page = () => {
  return (
    <AuthLayout>
      <SignIn forceRedirectUrl="/dashboard" />
    </AuthLayout>
  );
};

export default page;
