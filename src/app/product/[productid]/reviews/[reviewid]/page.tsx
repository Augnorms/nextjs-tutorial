export default function Reviews({params}:Readonly<{params:{reviewid:string}}>){
    return(
        <section>
            <h1>product review page {params.reviewid}</h1>
        </section>
    )
}