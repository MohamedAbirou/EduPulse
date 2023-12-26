import { isTeacher } from "@/lib/teacher";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const TeacherLayout = ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();

  if (!isTeacher) {
    return redirect("/");
  }

  return <div>{children}</div>;
};

export default TeacherLayout;
