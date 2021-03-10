import React from 'react'

function OrderComponents({order}) {
    return (
        <div className="order_div">
            <p>i am fake amount or your order history page ={ order.data.amount}</p>
            
        </div>
    )
}

export default OrderComponents
