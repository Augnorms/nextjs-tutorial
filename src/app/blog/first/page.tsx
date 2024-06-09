import { Metadata } from "next"

export const metadata:Metadata = {
    title:{
      absolute:"",
      default:"hello blog",
      template:""
    }
}

export default function First(){
    return <h1>Welcome to first page</h1>
}