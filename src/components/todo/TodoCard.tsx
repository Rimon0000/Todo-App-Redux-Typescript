import { SquarePen, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/redux/hooks";
import { removeTodo } from "@/redux/features/todoSlice";

export type TTodoCardProps = {
    id: string;
    title: string;
    description: string;
}

const TodoCard = ({title, description, id }: TTodoCardProps ) =>{
    const dispatch = useAppDispatch()

    return (
        <div className="bg-white rounded-md flex justify-between items-center p-3 border">
            <input type="checkbox" name="" id="" />
            <p className="font-semibold">{title}</p>
            {/* <p>Time</p> */}
            <p>{description}</p>
            <div className="space-x-5">
                <Button onClick={() => dispatch(removeTodo(id))} className="bg-red-500"><Trash2 /></Button>
                <Button className="bg-[#5C53FE]"><SquarePen /></Button>
            </div>
        </div>
    )
}

export default TodoCard;