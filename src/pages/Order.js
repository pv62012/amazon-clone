import React,{useState, useEffect} from 'react';
import OrderComponents from '../components/OrderComponents';
import { db } from '../firebase';
import { useStateValue } from '../state/StateProvider';
import '../style/Order.css';


function Order() {

    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
           db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data:doc.data()
                })))
            ))     
        } else {
            setOrders([])
        }
       
    }, [user])
    return (
        <div className="orders">  
            <h1>Your Orders</h1>
            <div className="order_orders">
                {orders?.map(order => (
                    <OrderComponents order={ order}/>
                ))}
            </div>
        </div>
    );
}

export default Order;