import { useAppSelector } from "@/redux/hooks";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";



const TodoContainer = () =>{
    //from local state
    // const {todos} = useAppSelector((state) => state.todos)

    //from server state
    const { data: todos, error, isLoading } = useGetTodosQuery(undefined)

    if(isLoading){
        <p>Loading .....</p>
    }

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
                    {
                        todos?.data?.map(todo  => <TodoCard key={todo.id} {...todo}></TodoCard>)
                    }
                </div>
            
            </div>
        
        </div>
    )
}

export default TodoContainer;