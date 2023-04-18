import React, { ReactNode } from "react";
type menuProps<T> = {
  items: T[];
  direction?: "flex-col" | "flex-row flex-wrap justify-center";
  render: (item: T) => ReactNode;
};
const Menu = <T,>({ items, render, direction = "flex-col" }: menuProps<T>) => {
  return (
    <ul className={`flex  gap-1 ${direction}`}>
      {items.map((item, id) => (
        <li key={id}>{render(item)}</li>
      ))}
    </ul>
  );
};

export default Menu;
