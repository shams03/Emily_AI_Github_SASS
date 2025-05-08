import { auth } from "@clerk/nextjs/server"
import {redirect} from "next/navigation";

const SyncUser = async ()=> {
    const {userId} = await auth();
    if (!userId){
        redirect('/sign-in');

    }

    const user = await prisma
}