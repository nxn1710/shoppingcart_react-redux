let initialState = [
    {
        id: 1,
        name: "Iphone 6",
        image:
            "https://tanphatmobile.vn/hinh-anh/san-pham/ip6-16gb.jpg",
        price: 15,
        inventory: 10,
    },
    {
        id: 2,
        name: "Iphone 7",
        image:
            "https://www.gizmochina.com/wp-content/uploads/2016/09/iphone7-plus-5-1-500x500.jpg",
        price: 20,
        inventory: 10,
    },
    {
        id: 3,
        name: "Iphone 8",
        image:
            "https://zshop.vn/images/thumbnails/500/500/detailed/74/iPhone_8_Plus__Gray.jpg?t=1543911599",
        price: 25,
        inventory: 10,
    },
    {
        id: 4,
        name: "Iphone 10",
        image:
            "https://i0.wp.com/mobilemothermyanmar.com/wp-content/uploads/2017/11/iphone-x-e1511779585848.jpg?fit=500%2C500&ssl=1",
        price: 30,
        inventory: 10,
    },
];

const product = (state = initialState, action) => {
    switch (action.type) {
        default:
            return [...state];
    }
};

export default product;