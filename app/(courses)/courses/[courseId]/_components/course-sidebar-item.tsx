"use client";

import { cn } from "@/lib/utils";
import { CheckCircle, Lock, PlayCircle } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface CourseSidebarItemProps {
  id: string;
  label: string;
  isCompleted: boolean;
  courseId: string;
  isLocked: boolean;
}

export const CourseSidebarItem = ({
  id,
  label,
  isCompleted,
  courseId,
  isLocked,
}: CourseSidebarItemProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const Icon = isLocked ? Lock : isCompleted ? CheckCircle : PlayCircle;

  const isActive = pathname?.includes(id);

  const onClick = () => {
    router.push(`/courses/${courseId}/chapters/${id}`);
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-200/20",
        isActive &&
          "text-rose-700 bg-rose-200/20 hover:bg-rose-200/20 hover:text-rose-700",
        isCompleted && "text-emerald-700 hover:text-emerald-700",
        isCompleted && isActive && "bg-emerald-200/20 hover:bg-emerald-200/20"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn(
            "text-slate-500 ",
            isActive && "text-rose-500",
            isCompleted && "text-emerald-700"
          )}
        />
        <p className="text-left line-clamp-1">{label}</p>
      </div>
      <div
        className={cn(
          "ml-auto opacity-0 border-2 border-rose-500 h-full transition-all",
          isActive && "opacity-100 ",
          isCompleted && "border-emerald-700"
        )}
      />
    </button>
  );
};
