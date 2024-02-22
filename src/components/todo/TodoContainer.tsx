import { Button } from "../ui/button";
import TodoCard from "./TodoCard";

const TodoContainer = () =>{
    return (
        <div>
            <div>
                <Button>Add Todo</Button>
                <Button>Filter</Button>
            </div>
            <div className="bg-red-500 h-full w-full rounded-xl p-5 space-y-3">
                {/* <div className="bg-white text-2xl font-semibold p-5 flex justify-center items-center">
                    <p>There is no Task pending</p>
                </div> */}
                {/* <TodoCard></TodoCard> */}
            </div>
        
        </div>
    )
}

export default TodoContainer;