import React from 'react';

// Hardcoded order details
const orderItems = [
    {
        id: '67e3a9aa210afe2e2eb6e9ad',
        name: "Air Jordan 1 Low Women's Aluminum",
        category: "Men's",
        imageUrl: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/719a9938-c96a-49c4-81b5-0a290630688e/AIR+JORDAN+1+LOW+SE.png',
        price: 89,
        quantity: 2,
    },
    {
        id: '67e3a9aa210afe2e2eb6e9ae',
        name: 'Air Jordan 1 Mid SE White Oxidized Green',
        category: "Men's",
        imageUrl: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/80cfd998-7a1a-4c38-9afa-b76ad5a84dab/AIR+JORDAN+4+RM.png',
        price: 135,
        quantity: 1,
    },
    {
        id: '67e3a9aa210afe2e2eb6e9af',
        name: 'Jordan Shoe 1',
        category: "Men's",
        imageUrl: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/476771a5-d33d-4a13-a16b-804b1d650e67/AIR+JORDAN+1+RETRO+HIGH+OG.png',
        price: 135,
        quantity: 1,
    }
];

const OrdersPage = () => {
    // Calculate total price
    const totalAmount = orderItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div style={styles.ordersPage}>
            <h2 style={styles.heading}>Your Order has been Delivered</h2>
            <div style={styles.orderItems}>
                {orderItems.map(item => (
                    <div key={item.id} style={styles.orderItem}>
                        <img src={item.imageUrl} alt={item.name} style={styles.image} />
                        <div>
                            <h3 style={styles.productName}>{item.name}</h3>
                            <p style={styles.category}>{item.category}</p>
                            <p style={styles.price}>Price: ${item.price}</p>
                            <p style={styles.quantity}>Quantity: {item.quantity}</p>
                            <p style={styles.total}>Amount: ${item.price * item.quantity}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div style={styles.orderSummary}>
                <h3 style={styles.totalPrice}>Total Order Amount: ${totalAmount}</h3>
            </div>
        </div>
    );
};

// Inline styles
const styles = {
    ordersPage: {
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        maxWidth: '800px',
        margin: '0 auto',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    heading: {
        textAlign: 'center',
        color: '#333',
    },
    orderItems: {
        marginBottom: '20px',
    },
    orderItem: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '15px',
        padding: '10px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    image: {
        width: '100px',
        height: '100px',
        marginRight: '20px',
        borderRadius: '8px',
    },
    productName: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#333',
    },
    category: {
        color: '#555',
    },
    price: {
        color: '#333',
    },
    quantity: {
        color: '#333',
    },
    total: {
        fontWeight: 'bold',
        color: '#333',
    },
    orderSummary: {
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    },
    totalPrice: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#333',
    },
};

export default OrdersPage;
