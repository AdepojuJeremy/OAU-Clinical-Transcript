"use client"
import dynamic from "next/dynamic";
import { useEffect } from "react";

const InvoicePDF = dynamic(()=> import("../page"), {
    ssr: false,
})


export default function View(){
    const [client,setClient] = useState(false);

    useEffect(()=> {
        setClient(true);
    })

    return (
        <InvoicePDF />
    )
}