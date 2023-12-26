import { Progress } from "./ui/progress";

interface CourseProgressProps {
  variant?: "default" | "success";
  value: number;
  size?: "default" | "sm";
}

const colorByVariant = {
  default: "text-rose-400",
  success: "text-emerald-700",
};

const sizeByVariant = {
  default: "text-sm",
  sm: "text-xs",
};

export const CourseProgress = ({
  value,
  variant,
  size,
}: CourseProgressProps) => {
  return (
    <div>
      <Progress className="h-2" value={value} />
    </div>
  );
};
