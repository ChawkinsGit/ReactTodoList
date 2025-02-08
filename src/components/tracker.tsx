import "bootstrap/dist/css/bootstrap.min.css";
interface Props {
  name: string;
}
const ListGroup = ({ name }: Props) => {
  return (
    <li className="list-group-item">
      Anime: {name}
      <button type="button" className="btn-close" aria-label="Close"></button>
    </li>
  );
};

export default ListGroup;
