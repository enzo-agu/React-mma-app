

export const BuyerForm = ({ setBuy, buy, name }) => {
 const handleOnchange = (e) => {

        setBuy({...buy,[e.target.name]: e.target.value})

    }
    return (
        <>
            <div>
                <input type="text" name={name} onChange={handleOnchange}></input>

            </div>

        </>
    )
}