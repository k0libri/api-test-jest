export const userSchema = {
    type: 'object',
    properties: {
        data: {
            type: 'object',
            properties: {
                id: {
                    type: 'integer'
                },
                email: {
                    type: 'string',
                    format: 'email'
                },
                first_name: {
                    type: 'string'
                },
                last_name: {
                    type: 'string'
                },
                avatar: {
                    type: 'string',
                    format: 'uri'
                }
            },
            required: ['id', 'email', 'first_name', 'last_name', 'avatar']
        },
        support: {
            type: 'object',
            properties: {
                url: {
                    type: 'string',
                    format: 'uri'
                },
                text: {
                    type: 'string'
                }
            },
            required: ['url', 'text']
        }
    },
    required: ['data', 'support']
};