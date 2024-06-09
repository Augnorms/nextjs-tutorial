export default function Docs({params}:Readonly<{params:{slug: string[]}}>){
   return(
    <div>
        <h1>Docs home page ({params.slug})</h1>
    </div>
   )
}