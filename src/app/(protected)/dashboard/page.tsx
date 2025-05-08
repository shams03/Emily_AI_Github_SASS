'use client'

import {useUser} from "@clerk/nextjs"


export default function Dashboard(){
    const {user} = useUser();
   return (
    <div>
        <h1>Dashboard</h1>
        <p>Welcome {user?.firstName}</p>
    </div>
   )
    
    
}