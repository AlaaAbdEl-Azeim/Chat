export const contacts = [
    {
        'id' : '1',
        'name' : 'Hassan',
        'unread' : null,
        'lastMessageDate': '12:00 am',
        'lastMessage':'I tried to call you yesterday',
        'online':true,
        img:"assets/images/contacts/contact.jpg",
        "status" : 'No pain .. No gain'
    },
    {
        'id'             : '2',
        'name'           : 'Hisham',
        'unread'         : 2,
        'lastMessageDate': 'yesterday',
        'lastMessage':'I tried to call you yesterday2',
        'online':false,
        img:"assets/images/contacts/contact2.jpg",
        "status" : 'Good mood'


    },
    {
        'id'             : '3',
        'name'           : 'Jenefier',
        'unread'         : null,
        'lastMessageDate': '8 sep',
        'lastMessage':'I tried to call you yesterdayI tried to call you yesterdayI tried to call you yesterdayI tried to call you yesterdayI tried to call you yesterdayI tried to call you yesterday',
        'online':true,
        img:"assets/images/contacts/contact3.jpg",
        "status" : 'Away'



    }


]

export const chat_history=[
    {
        "contactId":"1",
        "history":[
            {
                'userId'    : '1',
                'message': 'Quickly come to the meeting room 1B, we have a big server issue',
                'time'   : '2017-03-22T08:54:28.299Z'
            },
            {
                'userId'    : '4',
                'message': 'I’m having breakfast right now, can’t you wait for 10 minutes?',
                'time'   : '2017-03-22T08:55:28.299Z'
            },
            {
                'userId'    : '1',
                'message': 'We are losing money! Quick!',
                'time'   : '2017-03-22T09:00:28.299Z'
            }
        ]
    },
    {
        "contactId":"2",
        "history":[
            {
                'userId'    : '2',
                'message': 'Quicerver issue',
                'time'   : '2017-03-22T08:54:28.299Z'
            },
            {
                'userId'    : '2',
                'message': 'I’m hafor 10 minutes?',
                'time'   : '2017-03-22T08:55:28.299Z'
            },
            {
                'userId'    : '4',
                'message': 'We arey! Quick!',
                'time'   : '2017-03-22T09:00:28.299Z'
            }
        ]
    }
];