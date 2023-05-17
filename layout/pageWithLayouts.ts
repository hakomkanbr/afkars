import { NextPage } from "next";
import type { ReactElement } from "react";

export type PageWithLayoutType = any;

export type LayoutProps = ({ children }: { children: ReactElement }) => ReactElement
export default PageWithLayoutType;