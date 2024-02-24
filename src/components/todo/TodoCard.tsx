import { SquarePen, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/redux/hooks";
import { removeTodo, toggleComplete } from "@/redux/features/todoSlice";

export type TTodoCardProps = {
    id: string;
    title: string;
    description: string;
    isCompleted: boolean;
    priority: string
}

const TodoCard = ({title, description, id, isCompleted, priority }: TTodoCardProps ) =>{
    const dispatch = useAppDispatch()

    //
    const toggleState = () =>{
        dispatch(toggleComplete(id))
    }

    return (
        <div className="bg-white rounded-md flex justify-between items-center p-3 border">
            <input onChange={toggleState} type="checkbox" name="complete" id="complete" />
            <p className="font-semibold">{title}</p>
            {/* <p>Time</p> */}
            <div>
                {isCompleted ? 
                <p className="text-green-500">Done</p> : 
                <p className="text-red-500">Pending</p>
                }
            </div>
            <p>{description}</p>
            <p>{priority}</p>
            <div className="space-x-5">
                <Button onClick={() => dispatch(removeTodo(id))} className="bg-red-500"><Trash2 /></Button>
                <Button className="bg-[#5C53FE]"><SquarePen /></Button>
            </div>
        </div>
    )
}

export default TodoCard;