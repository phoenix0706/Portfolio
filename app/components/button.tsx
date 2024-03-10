import { Button } from "@nextui-org/button";
type ButtonColor =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

interface CButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  color: ButtonColor;
  className?: string;
}
export default function CButton(props: CButtonProps) {
  return (
    <div className="text-center ">
      <Button
        color={props.color}
        className={`mt-4 ${props.className}`}
        onClick={props.onClick}
      >
        {props.children}
      </Button>
    </div>
  );
}
