export const ListItem = function ({ item }) {
  return (
    <ul>
      <li>{JSON.stringify(item)}</li>
    </ul>
  );
};
