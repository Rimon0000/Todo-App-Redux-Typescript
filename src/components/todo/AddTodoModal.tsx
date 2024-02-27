import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAddTodoMutation } from "@/redux/api/api"
// import { useAppDispatch } from "@/redux/hooks"
import { DialogClose } from "@radix-ui/react-dialog"
import { FormEvent, useState } from "react"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select"

const AddTodoModal = () =>{
    const [task, setTask] = useState("")
    const [description, setDescription] = useState("")
    const [priority, setPriority] = useState("")
    //For local state management
    // const dispatch = useAppDispatch()

    //for server state
    // [actualFunctionForPost, {data, isLoading, isError, isSuccess}]
    const [addTodo, {data, isLoading, isError, isSuccess}] = useAddTodoMutation()

    // console.log({data, isLoading, isError, isSuccess});

    //Handle Submit
    const handleSubmit = (e: FormEvent) =>{
        e.preventDefault()

        // const randomString = Math.random().toString(36).substring(2, 7)

        const taskDetails = {
          // id: randomString,
          title: task,
          isCompleted: false,
          description,
          priority,
        }

        // console.log("inside handle sumit =>", taskDetails);

        //for local state
        // dispatch(addTodo(taskDetails))

        // for server state 
        addTodo(taskDetails)
    }


    return (
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-primary-gradient">Add Todo</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Task</DialogTitle>
              <DialogDescription>
                Add your tasks that what you want to finish.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="task" className="text-right">
                      Task
                    </Label>
                    <Input onBlur={(e) => setTask(e.target.value)}
                      id="task"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="description" className="text-right">
                      Description
                    </Label>
                    <Input onBlur={(e) => setDescription(e.target.value)}
                      id="description"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label className="text-right">
                      Priority
                    </Label>
                    <Select onValueChange={(value) => setPriority(value)}>
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Select a priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex justify-end">
                    <DialogClose asChild>
                        <Button type="submit">Save changes</Button>
                    </DialogClose>
                </div>
            </form> 
          </DialogContent>
        </Dialog>
    )
}

export default AddTodoModal;