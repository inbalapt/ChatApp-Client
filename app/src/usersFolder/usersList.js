import Arthur from './profile/arthur.jpeg';
import elsa from './profile/elsa.jpg';
import tituf from './profile/tituf.jpg';
import olaf from './profile/bob.jpg';
import sea from './profile/sea.jpg';
import Matan from './profile/MatanTarif.mp3';
import video from './profile/mov_bbb.mp4';
import shabatVideo from './profile/shabat.mp4'
import funny from './profile/funny.jpg';
import female1 from './profile/profile1.jpg'
import male1 from './profile/profile2.jpg'
import female2 from './profile/profile3.jpg'
import male2 from './profile/profile4.jpg'
import female3 from './profile/profile5.jpg'
import male3 from './profile/profile6.jpg'
import female4 from './profile/profile7.jpg'
import male4 from './profile/profile8.jpg'

var users = [{ username: "inbal33", password: "1020", displayName: "Inbal", img: elsa, time: "11:20", message: "hola" },
{ username: "noale10", password: "454545", displayName: "Noa", img: olaf, time: "11:40", message: "bye" },
{ username: "yoval99", password: "09876", displayName: "Amit", img: tituf, time: "12:30", message: "Hapoel Tel Aviv is the winner" },
{ username: "harel21", password: "0167", displayName: "Harel", img: Arthur, time: "11:50", message: "maccabi haifa" },
{ username: "harel21", password: "0167", displayName: "Harel", img: Arthur, time: "11:50", message: "maccabi" },
{ username: "yoval99", password: "09876", displayName: "Amit", img: tituf, time: "12:30", message: "Hapoel Tel Aviv is the winner" },
{ username: "inbal33", password: "1020", displayName: "Inbal", img: elsa, time: "11:20", message: "hola" },
{ username: "noale10", password: "454545", displayName: "Noa", img: olaf, time: "11:40", message: "bye" },
{ username: "yoval99", password: "09876", displayName: "Amit", img: tituf, time: "12:30", message: "Hapoel Tel Aviv is the winner" },
{ username: "harel21", password: "0167", displayName: "Harel", img: Arthur, time: "11:50", message: "maccabi haifa" },
{ username: "harel21", password: "0167", displayName: "Harel", img: Arthur, time: "11:50", message: "maccabi" },
{ username: "yoval99", password: "09876", displayName: "Amit", img: tituf, time: "12:30", message: "Hapoel Tel Aviv is the winner" }];


/*
var userMap = {inbal33: {password: "1020", displayName: "Inbal", img: elsa,
                        myFriends:[{friend: "noale10", chat:[{type: 1, text:"hiii", time: "10:00", mine:true},
                                                            {type: 1, text:"how are you?", time: "10:01", mine:true},
                                                            {type: 1, text:"good how are you?", time: "10:02", mine:false}] },

                                    {friend:"yoval99",  chat:[{type: 1, text:"hii!!!", time: "12:50", mine:true},
                                                            {type: 1, text:"you are so nice", time: "13:01", mine:false},
                                                            {type: 1, text:"whats up", time: "17:02", mine:false}] },

                                    {friend:"harel21",  chat:[{type: 1, text:"macabi", time: "12:50", mine:true}] }]},

            harel21: {password: "0167", displayName: "Harel", img: Arthur,
            myFriends: [{friend: "yoval99", chat:[{type: 1, text:"hola", time: "10:00", mine:true},
                                                    {type: 1, text:"hijjiij", time: "10:01", mine:false},
                                                    {type: 1, text:"???", time: "10:02", mine:true}] },
                        {friend:"inbal33",  chat:[{type: 1, text:"macabi", time: "12:50", mine:false}] }]},



            yoval99: {password: "09876", displayName: "Amit", img: tituf},
            noale10: {password: "454545", displayName: "Noa", img: olaf },
            
            tomer50: {password: "2020", displayName: "Harel", img: Arthur}};


*/

var userMap = {
    inbal33: {
        username: "inbal33", password: "1020", displayName: "Inbal", img: female1,
        myFriends: {
            noale10: [{ type: "text", text: "hiii", time: "10:00", mine: true },
                    { type: "text", text: "how are you?", time: "10:01", mine: true },
                    { type: "text", text: "good how are you?", time: "10:02", mine: false },
                    { type: "image", text: sea, time: "15:20", mine: true }],


            yoval99: [{ type: "text", text: "hii!!!", time: "12:50", mine: true },
                    { type: "text", text: "you are so nice", time: "13:01", mine: false },
                    { type: "text", text: "whats up", time: "17:02", mine: false },
                    { type: "audio", text: Matan, time: "17:05", mine: true }],

            harel21: [{ type: "text", text: "macabi", time: "12:50", mine: true },
                    { type: "video", text: video, time: "17:06", mine: true }],

            tomer50:[{ type: "text", text: "how are you", time: "13:49", mine: true },
                    { type: "image", text: funny, time: "17:05", mine: false }],

            yair39: [{ type: "text", text: "hi", time: "12:07", mine: true },
                    { type: "video", text: video, time: "17:06", mine: true }]

        }
    },



    harel21: {
        username: "harel21", password: "0167", displayName: "Harel", img: male1,
        myFriends: {
            yoval99: [{ type: "text", text: "hola", time: "10:00", mine: true },
                    { type: "text", text: "hijjiij", time: "10:01", mine: false },
                    { type: "text", text: "???", time: "10:02", mine: true },
                    { type: "image", text: olaf, time: "10:03", mine: true }],

            inbal33: [{ type: "text", text: "macabi", time: "12:50", mine: false },
                    { type: "video", text: video, time: "17:06", mine: false }],

            yair39: [{ type: "text", text: "hi darling", time: "12:05", mine: true },
                    { type: "video", text: video, time: "17:06", mine: true },
                    { type: "text", text: "miss you", time: "17:09", mine: false }],

            tomer50: [{ type: "text", text: "remember tituf?", time: "13:49", mine: false },
                    { type: "image", text: tituf, time: "13:50", mine: false },
                    { type: "text", text: "no", time: "19:05", mine: true }],

            michal321:[{ type: "text", text: "Shabat Shalom", time: "11:42", mine: true },
                    { type: "video", text: shabatVideo, time: "11:43", mine: true },
                    { type: "text", text: "thank you!", time: "12:31", mine: false }]

        }
    },

    yoval99: {
        username: "yoval99", password: "09876", displayName: "Yoval", img: female2,
        myFriends: {
            inbal33:  [{ type: "text", text: "hii!!!", time: "12:50", mine: false },
                    { type: "text", text: "you are so nice", time: "13:01", mine: true },
                    { type: "text", text: "whats up", time: "17:02", mine: true },
                    { type: "audio", text: Matan, time: "17:05", mine: false }],

            harel21: [{ type: "text", text: "hola", time: "10:00", mine: false },
                    { type: "text", text: "hijjiij", time: "10:01", mine: true },
                    { type: "text", text: "???", time: "10:02", mine: false },
                    { type: "image", text: olaf, time: "10:03", mine: false }],

            noale10: [{ type: "text", text: "hii noaa", time: "10:00", mine: true },
                    { type: "text", text: "how are you", time: "10:01", mine: false },
                    { type: "text", text: "you like elsa", time: "10:02", mine: true },
                    { type: "image", text: elsa, time: "10:03", mine: true }],

            tomer50: [{ type: "text", text: "you have to listen", time: "17:02", mine: true },
                    { type: "audio", text: Matan, time: "17:05", mine: true }],

            michal321: [{ type: "text", text: "you have to see", time: "14:42", mine: true },
                        { type: "video", text: video, time: "14:45", mine: true }]

        }
    },

/////////////////////////////////////////////////////////////////////////////////////////////////
    noale10: {
        username: "noale10", password: "454545", displayName: "Noa", img: female3,
        myFriends: {
            inbal33: [{ type: "text", text: "hiii", time: "10:00", mine: false },
                    { type: "text", text: "how are you?", time: "10:01", mine: false },
                    { type: "text", text: "good how are you?", time: "10:02", mine: true },
                    { type: "image", text: sea, time: "15:20", mine: false }],

            yoval99: [{ type: "text", text: "hii noaa", time: "10:00", mine: false },
                    { type: "text", text: "how are you", time: "10:01", mine: true },
                    { type: "text", text: "you like elsa", time: "10:02", mine: false },
                    { type: "image", text: elsa, time: "10:03", mine: false }],

            tomer50:[{ type: "text", text: "how you doinnn", time: "10:00", mine: false }],

            yair39:[{ type: "text", text: "hiiii", time: "15:08", mine: false },
                    { type: "image", text: elsa, time: "10:03", mine: false },
                    { type: "audio", text: Matan, time: "17:05", mine: true }],

            michal321:[{ type: "text", text: "hiiii", time: "15:08", mine: false },
                    { type: "audio", text: Matan, time: "14:35", mine: false },
                    { type: "video", text: video, time: "14:45", mine: true }]

        }
    },

    tomer50: { username: "tomer50", password: "2020", displayName: "Tomer", img: male2,
        myFriends:{
            inbal33:[{ type: "text", text: "how are you", time: "13:49", mine: false },
                    { type: "image", text: funny, time: "17:05", mine: true }],

            harel21: [{ type: "text", text: "remember tituf?", time: "13:49", mine: true },
                    { type: "image", text: tituf, time: "13:50", mine: true },
                    { type: "text", text: "no", time: "19:05", mine: false }],

            yoval99: [{ type: "text", text: "you have to listen", time: "17:02", mine: false },
                    { type: "audio", text: Matan, time: "17:05", mine: false }],

            noale10:[{ type: "text", text: "how you doinnn", time: "10:00", mine: true }],

            yair39:[{ type: "text", text: "hiiii", time: "15:08", mine: false },
                    { type: "audio", text: Matan, time: "16:05", mine: true },
                    { type: "image", text: funny, time: "16:08", mine: true }]
        }
    },

    yair39: {username:"yair39", password:"5678", displayName:"Yair", img: male3,
        myFriends:{
            inbal33: [{ type: "text", text: "hi", time: "12:07", mine: false },
                    { type: "video", text: video, time: "17:06", mine: false }] ,

            harel21:  [{ type: "text", text: "hi darling", time: "12:05", mine: false },
                    { type: "video", text: video, time: "17:06", mine: false },
                    { type: "text", text: "miss you", time: "17:09", mine: true }],

            noale10: [{ type: "text", text: "hiiii", time: "15:08", mine: true },
                    { type: "image", text: elsa, time: "10:03", mine: true },
                    { type: "audio", text: Matan, time: "17:05", mine: false }],

            tomer50:[{ type: "text", text: "hiiii", time: "15:08", mine: true },
                    { type: "audio", text: Matan, time: "16:05", mine: false },
                    { type: "image", text: funny, time: "16:08", mine: false }],

            michal321:[{ type: "text", text: "hi kokooo", time: "21:05", mine: false },
                    { type: "image", text: Arthur, time: "21:06", mine: false },
                    { type: "text", text: "miss you", time: "21:09", mine: true }]
        }
    },

    michal321: {username:"michal321", password:"0987", displayName:"Michal", img: female4,
        myFriends:{
            inbal33: [{ type: "text", text: "hiii", time: "10:00", mine: true },
                    { type: "text", text: "how are you?", time: "10:01", mine: true },
                    { type: "text", text: "good how are you?", time: "10:02", mine: false }] ,

            harel21: [{ type: "text", text: "Shabat Shalom", time: "11:42", mine: false },
                    { type: "video", text: shabatVideo, time: "11:43", mine: false },
                    { type: "text", text: "thank you!", time: "12:31", mine: true }],

            yoval99:[{ type: "text", text: "you have to see", time: "14:42", mine: false },
                    { type: "video", text: video, time: "14:45", mine: false }],

            yair39:[{ type: "text", text: "hi kokooo", time: "21:05", mine: true },
                    { type: "image", text: Arthur, time: "21:06", mine: true },
                    { type: "text", text: "miss you", time: "21:09", mine: false }],


            noale10: [{ type: "text", text: "hiiii", time: "15:08", mine: true },
                    { type: "audio", text: Matan, time: "14:35", mine: true },
                    { type: "video", text: video, time: "14:45", mine: false }]
        }
    }
};





/*var usersno = [{
    username: "inbal33", password: "1020", displayName: "Inbal", img: elsa,
    myFriends: [{
        friend: "noale10", chat: [{ type: 1, text: "hiii", time: "10:00", mine: true },
        { type: 1, text: "how are you?", time: "10:01", mine: true },
        { type: 1, text: "good how are you?", time: "10:02", mine: false }]
    },

    {
        friend: "yoval99", chat: [{ type: 1, text: "hii!!!", time: "12:50", mine: true },
        { type: 1, text: "you are so nice", time: "13:01", mine: false },
        { type: 1, text: "whats up", time: "17:02", mine: false }]
    },

    { friend: "harel21", chat: [{ type: 1, text: "macabi", time: "12:50", mine: true }] }]
},

{
    username: "harel21", password: "0167", displayName: "Harel", img: Arthur,
    myFriends: [{
        friend: "yoval99", chat: [{ type: 1, text: "hola", time: "10:00", mine: true },
        { type: 1, text: "hijjiij", time: "10:01", mine: false },
        { type: 1, text: "???", time: "10:02", mine: true }]
    },
    { friend: "inbal33", chat: [{ type: 1, text: "macabi", time: "12:50", mine: false }] }]
}
];*/




users.sort((a, b) => a.time < b.time ? 1 : -1)
//export default users;
export default userMap;
