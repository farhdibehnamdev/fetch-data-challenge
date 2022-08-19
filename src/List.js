import { ListItem } from "./ListItem";
export const List = function ({ items }) {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  );
};
