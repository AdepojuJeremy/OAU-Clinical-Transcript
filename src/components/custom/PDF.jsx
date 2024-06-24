"use client"
import {Document,Page,View,Text,Image,PDFViewer,StyleSheet,Font} from "@react-pdf/renderer"
import { useEffect, useState } from "react"

function PDF(){
    return(
        <Document>
            <Page>
                <View>
                    <Text>Hello world</Text>
                </View>
            </Page>
        </Document>
    )
}

export default function PDFView(){
    const [client,setClient] = useState();

    useEffect(()=> {
setClient(true);

    },[]);

    return(
        <PDFViewer>
            <PDF />
        </PDFViewer>

)

}


