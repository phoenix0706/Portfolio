import { Button } from "@nextui-org/button";
interface CButtonProps {
  content: string;
}

export default function CButton(props: CButtonProps) {
  return (
    <div className="text-center">
      <Button color="secondary" className="mt-4  ">
        {props.content}
      </Button>
    </div>
  );
}
