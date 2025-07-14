interface TodoItemProps {
    id:number;
    text:string;
    completed:boolean;
    onToggle:(id:number) => void;
    onDelete:(id:number) => void;
}

export default function TodoItem({ id, text, completed, onToggle, onDelete }: TodoItemProps) {
  return (
    <div className="flex items-center justify-between p-3 border rounded-lg">
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
          className="w-5 h-5"
        />
        <span className={completed ? 'line-through text-gray-500' : ''}>
          {text}
        </span>
      </div>
      <button
        onClick={() => onDelete(id)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </div>
  );
}