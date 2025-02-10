import "bootstrap/dist/css/bootstrap.min.css";
interface Props {
  name: string;
  onDelete: () => void;
}
const ListGroup = ({ name, onDelete }: Props) => {
  return (
    <li className="list-group-item">
      {name}
      <button
        type="button"
        className="btn-close"
        onClick={onDelete}
        aria-label="Close"
      ></button>
    </li>
  );
};

export default ListGroup;
