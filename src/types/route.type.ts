import { FC, ReactElement, ComponentClass } from "react";

interface SingleRoute {
    path?: string
    element?: FC | ReactElement | ComponentClass
    children?: SingleRoute[]
    index?:boolean

}
export interface RouterProps {
    path: string,
    element?: FC | ReactElement  | ComponentClass,
    children:SingleRoute[]
}

