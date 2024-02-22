import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () =>{
    return (
        <div>
            <div className="flex justify-between mb-5">
                <AddTodoModal></AddTodoModal>
                <TodoFilter></TodoFilter>
            </div>
            <div className="bg-primary-gradient h-full w-full rounded-xl p-[3px]">
                {/* <div className="bg-white text-2xl font-semibold p-5 flex justify-center items-center">
                    <p>There is no Task pending</p>
                </div> */}
                <div className="bg-white w-full h-full p-5 rounded-lg space-y-3">
                    <TodoCard></TodoCard>
                    <TodoCard></TodoCard>
                    <TodoCard></TodoCard>
                    <TodoCard></TodoCard>
                </div>
            
            </div>
        
        </div>
    )
}

export default TodoContainer;