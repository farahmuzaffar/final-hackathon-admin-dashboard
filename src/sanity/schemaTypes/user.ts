export const userSchema = {
        title: 'User',
        name: 'user',
        type: 'document',
        fields: [
            {
                name: 'userId',
                type: 'string',
                title: 'User ID',
            },
            {
                name: 'name',
                type: 'string',
                title: 'Name',
            },
            {
                name: 'email',
                type: 'string',
                title: 'Email',
            },
            {
                name: 'password',
                type: 'string',
                title: 'Password',
            },
            {
                name: 'image',
                type: 'url',
                title: 'User Image',
            },
        ],
    }