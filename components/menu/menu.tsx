import React, { ReactNode } from "react";
type menuProps<T> = {
  items: T[];
  render: (item: T) => ReactNode;
};
const Menu = <T,>({ items, render }: menuProps<T>) => {
  
  return (
    <ul className="flex flex-col gap-1">
      {items.map((item, id) => (
        <li key={id}>{render(item)}</li>
      ))}
    </ul>
  );
};

export default Menu;
