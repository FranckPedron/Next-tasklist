'use client'

import {useState} from "react";
import Header from "@components/Header";
import AddTask from "@components/AddTask";

export default function Home() {
    const [task, setTask] = useState("");
    const [loading, setIsLoading] = useState(true);

    const handleCreateTask = async () => {
        setIsLoading(true);
        try {
            const response = await fetch("/api/task/new", {
                method: 'POST',
                body: JSON.stringify({
                    task: task
                })
            })
            if (response.ok) {
                setTask("")
            }
            else {
                console.log("Error")
            }
        } catch (e) {
            console.log(e);
        }
        setIsLoading(false);
    };

    return (
        <>
            <Header/>
            <AddTask task={task} setTask={setTask} handleCreateTask={handleCreateTask}/>
        </>
    )
}
