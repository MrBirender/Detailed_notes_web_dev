import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const Author = ({ userId }) => {
  const users = useSelector(selectAllUsers);

  const author = users.find((user) => user.id === userId);

  return (
    <span className="capitalize">
      {author ? author.name : "unknown author"}
    </span>
  );
};

export default Author;
