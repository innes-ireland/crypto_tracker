export default function ModalWindow({ setModalState, setModalData, modalData }) {

    return (
        < div className="coinModal_wrapper" >
            <div className="coinModal_header">
                <h2> {modalData.name} </h2>
            </div>
            <div className="coinModal_content">
                <h2> </h2>
            </div>
            <div className="closeButton">
                <button className="closeButton" onClick={() => { { setModalData(null); setModalState(false) } }}>
                    Close Window
                </button>
            </div>

        </div >
    )
}