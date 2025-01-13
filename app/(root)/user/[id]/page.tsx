import React from 'react'
import {auth} from "@/auth";
import {client} from "@/sanity/lib/client";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id;
    const session = await auth()

    const user = await client.fetch
    return (
        <div>Page</div>
    )
}
export default Page
