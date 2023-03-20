const initialData = {
    items : [
    {
        itemName : 'Redmi 8a (Sunset Red, 32 GB) (2 GB RAM)',
        itemImage: 'https://i.insider.com/5c07f1314b676b02b76259e1?width=1136&format=jpeg',
        itemPrice : '9000'
    },
        {
            itemName: 'Redmi 8b (Sunset Red, 32 GB) (2 GB RAM)',
            itemImage: "https://i01.appmifile.com/webfile/globalimg/in/cms/DFF8E0CE-D61C-6474-3F2D-831B25D07187.jpg",
            itemPrice: '9000'
        },
        {
            itemName: 'Redmi 8c (Sunset Red, 32 GB) (2 GB RAM)',
            itemImage: "https://i01.appmifile.com/webfile/globalimg/in/cms/DFF8E0CE-D61C-6474-3F2D-831B25D07187.jpg",
            itemPrice: '9000'
        },
        {
        itemName : 'Redmi 8d (Sunset Red, 32 GB) (2 GB RAM)',
        itemImage : "https://i01.appmifile.com/webfile/globalimg/in/cms/DFF8E0CE-D61C-6474-3F2D-831B25D07187.jpg",
        itemPrice : '9000'
    },
        {
            itemName: 'Redmi 8e (Sunset Red, 32 GB) (2 GB RAM)',
            itemImage: "https://i01.appmifile.com/webfile/globalimg/in/cms/DFF8E0CE-D61C-6474-3F2D-831B25D07187.jpg",
            itemPrice: '9000'
        },
        {
            itemName: 'Redmi 8f (Sunset Red, 32 GB) (2 GB RAM)',
            itemImage: "https://i01.appmifile.com/webfile/globalimg/in/cms/DFF8E0CE-D61C-6474-3F2D-831B25D07187.jpg",
            itemPrice: '9000'
        }

]
}

function ItemsReducer (state=initialData , action){
    switch(action.type)
    {
        case 'ADD_ITEM' : return{
            ...state ,
            items:[...state.items, action.payload]
        }
    }
    return state
}
export default ItemsReducer