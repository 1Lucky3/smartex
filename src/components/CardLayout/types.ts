import { FC, ReactNode } from "react";

interface ComponentProps {
  children: ReactNode;
}

export type Props = FC<ComponentProps>;
