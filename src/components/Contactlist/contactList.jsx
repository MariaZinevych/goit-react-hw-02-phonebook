export const ContactList = ({ onValues }) => {
  return (
    <>
      {onValues.map(value => (
        <li key={value.id}>
          <p> {value.name} </p>
          <p> {value.number} </p>
        </li>
      ))}
    </>
  );
};
