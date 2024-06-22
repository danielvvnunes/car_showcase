import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  children: React.ReactNode;
  containerStyles?: string;
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
  handleClick: MouseEventHandler<HTMLButtonElement> | undefined;
  type?: "button" | "submit" | "reset";
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: 30;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionalProps[];
}

export interface OptionalProps {
  title: string;
  value: string;
}

export interface showMoreProps {
  pageNumber: number;
  isNext: boolean;
}
