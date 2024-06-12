import { Checkbox, IconButton, HStack, Text } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const TodoItem = ({ todo, toggleComplete, removeTodo }) => {
  return (
    <HStack spacing={4} width="100%" justifyContent="space-between">
      <Checkbox isChecked={todo.completed} onChange={() => toggleComplete(todo.id)}>
        <Text as={todo.completed ? "s" : ""}>{todo.text}</Text>
      </Checkbox>
      <IconButton
        aria-label="Delete"
        icon={<FaTrash />}
        onClick={() => removeTodo(todo.id)}
      />
    </HStack>
  );
};

export default TodoItem;