import { packList } from "../types"
import './todoList.css'
type todoProps = {
    packList: packList;
}

export default function TodoList(props: todoProps) {
    return (
        props.packList ? 
        <ul>
        {Object.entries(props.packList).map(([key, value], index) => (
        value > 0 ?

    
        <li key={index}>
          <strong>{key}: </strong>
          {value}
        </li> : ""
      ))}
    </ul> : "no stuff yet lol"

    );
}