import { SignUp } from "@clerk/nextjs";
import AuthLayout from "../../layout";

const page = () => {
  return (
    <AuthLayout>
      <SignUp />
    </AuthLayout>
  );
};

export default page;
