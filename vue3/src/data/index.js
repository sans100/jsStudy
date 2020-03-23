export default {
    User: [
        {
            user_id: 1,
            name: 'sans100',
            created_at: '2020-03-23 11:34:11'
        },
        {
            user_id: 2,
            name: 'ooolll300',
            created_at: '2020-03-24 11:34:11'
        },
        {
            user_id: 1,
            name: 'hisang',
            created_at: '2020-03-25 11:34:11'
        },
    ],
    Content: [
        {
            content_id: 1,
            user_id: 1,
            title: '프리미어리그',
            context: '아직 미정입니다.',
            created_at: '2020-03-25 11:34:11',
            updated_at: null
        },
        {
            content_id: 2,
            user_id: 3,
            title: '라리가',
            context: '파이팅',
            created_at: '2020-03-25 11:34:11',
            updated_at: null
        },
        {
            content_id: 3,
            user_id: 2,
            title: '세리에',
            context: '^^',
            created_at: '2020-03-25 11:34:11',
            updated_at: null
        },
    ],
    Comment: [
        {
            comment_id: 1,
            user_id: 1,
            content_id: 3,
            context: '축하합니다.',
            created_at: '2020-03-25 11:34:11',
            updated_at: null
        },
        {
            comment_id: 2,
            user_id: 3,
            content_id: 3,
            context: '좋아요.',
            created_at: '2020-03-25 11:34:11',
            updated_at: null
        },
        {
            comment_id: 3,
            user_id: 2,
            content_id: 1,
            context: '나이스.',
            created_at: '2020-03-25 11:34:11',
            updated_at: null
        },
    ],
    SubComment: [
        {
            subcomment_id: 1,
            content_id: 3,
            user_id: 1,
            context: '오랜만이네요!',
            created_at: '2020-03-25 11:34:11',
            updated_at: null
        }
    ]
}