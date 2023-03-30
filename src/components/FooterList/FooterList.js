export const FooterList = ({ content, children }) => {
  return (
    <ul>
      {content.map((el) => (
        <li key={el.id}>
          <a href={el.link}>
            <span> {el.icon}</span>
            <p>{el.description}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};
