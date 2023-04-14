import { Agenda } from "../Agenda/Agenda"
export function Home(){
    return(
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <img src="https://firebasestorage.googleapis.com/v0/b/barberiajdea.appspot.com/o/Peaky%20Blinders.jpg?alt=media&token=cac0b604-8a43-4e01-8aa7-33a92e908794" alt="foto" className="img-fluid w-100"/>
                        </div>
                        <div className="col-12 col-md-4">
                            <Agenda></Agenda>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}