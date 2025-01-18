"use client";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

export const SubmitButton = ({
  children,
  pendingLabel,
}: {
  children: string;
  pendingLabel: string;
}) => {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      className="transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
    >
      {pending ? pendingLabel : children}
    </Button>
  );
};
