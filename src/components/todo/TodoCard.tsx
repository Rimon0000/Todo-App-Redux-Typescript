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
            <input onChange={toggleState} className="mr-3" type="checkbox" name="complete" id="complete" />
            <p className="font-semibold flex-1">{title}</p>
            {/* <p>Time</p> */}
            <div className="flex-1 flex items-center gap-2">
                <div className={`size-3 rounded-full
                ${priority === 'high' ? "bg-red-500" : null}
                ${priority === 'medium' ? "bg-yellow-500" : null}
                ${priority === 'low' ? "bg-green-500" : null}
                `}></div>
                <p className="">{priority}</p>
            </div>
            <div className="flex-1">
                {isCompleted ? 
                <p className="text-green-500">Done</p> : 
                <p className="text-red-500">Pending</p>
                }
            </div>
            <p>{description}</p>
            <div className="space-x-5">
                <Button onClick={() => dispatch(removeTodo(id))} className="bg-red-500"><Trash2 /></Button>
                <Button className="bg-[#5C53FE]"><SquarePen /></Button>
            </div>
        </div>
    )
}

export default TodoCard;