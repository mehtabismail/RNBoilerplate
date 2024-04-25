export const general_settings = [
    { key: 'general_setting', value: "General Settings", path: 'GeneralSettingContainer', svg: 'Settings' },
    { key: 'edit_profile', value: "Edit Profile", path: 'EditProfileContainer', svg: 'EditProfile' },
    { key: 'change_password', value: "Change Password", path: 'ResetPasswordContainer', svg: 'Lock' },
    { key: 'logout', value: "Logout", svg: 'Logout' },

]

export const user_data = {
    name: "Mehtab Ismail",
    username: "mehtab",
    email: "mehtab@gmail.com",
    phone: '+923417039563',
    address: 'Johar town',
    friends: 10,
    followings: 20,
    fans: 4
}


export const chats_data_large = [{
    name: "Wade Warren",
    message: "How are you today?",
    image: require('../theme/assets/images/img1.png'),
    count: 3,
    last_message_time: 2,
},
{
    name: "Aurlene MacCoy",
    message: "Did you get the transfer?",
    image: require('../theme/assets/images/img2.png'),
    count: 1,
    last_message_time: 3,
},
{
    name: "Cody Fisher",
    message: "Hey! Can you join the meeting?",
    image: require('../theme/assets/images/img3.png'),
    last_message_time: 4,
},
{
    name: "Ronald Richards",
    message: "How are you today",
    image: require('../theme/assets/images/img4.png'),
    last_message_time: 4,
},
{
    name: "Wade Warren",
    message: "How are you today?",
    image: require('../theme/assets/images/img1.png'),
    count: 3,
    last_message_time: 2,
},
{
    name: "Aurlene MacCoy",
    message: "Did you get the transfer?",
    image: require('../theme/assets/images/img2.png'),
    count: 1,
    last_message_time: 3,
},
{
    name: "Cody Fisher",
    message: "Hey! Can you join the meeting?",
    image: require('../theme/assets/images/img3.png'),
    last_message_time: 4,
},
{
    name: "Ronald Richards",
    message: "How are you today",
    image: require('../theme/assets/images/img4.png'),
    last_message_time: 4,
},
{
    name: "Wade Warren",
    message: "How are you today?",
    image: require('../theme/assets/images/img1.png'),
    count: 3,
    last_message_time: 2,
},
{
    name: "Aurlene MacCoy",
    message: "Did you get the transfer?",
    image: require('../theme/assets/images/img2.png'),
    count: 1,
    last_message_time: 3,
},
{
    name: "Cody Fisher",
    message: "Hey! Can you join the meeting?",
    image: require('../theme/assets/images/img3.png'),
    last_message_time: 4,
},
{
    name: "Ronald Richards",
    message: "How are you today",
    image: require('../theme/assets/images/img4.png'),
    last_message_time: 4,
}]


var d = new Date();

export const notification_data = [{
    title: "New Booking",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    date: new Date()
},
{
    title: "New Message",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    date: new Date()
},
{
    title: "Appointment Coming",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    date: new Date()
},
{
    title: "New Booking",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    date: new Date(d.setDate(d.getDate() - 1))
},
{
    title: "New Message",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    date: new Date(d.setDate(d.getDate() - 1))
},
{
    title: "Appointment Coming",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    date: new Date(d.setDate(d.getDate() - 1))
},
{
    title: "New Booking",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    date: new Date(d.setDate(d.getDate() - 1))
},
{
    title: "New Message",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    date: new Date(d.setDate(d.getDate() - 1))
},
{
    title: "Appointment Coming",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    date: new Date(d.setDate(d.getDate() - 1)),
    last: true
}
]
