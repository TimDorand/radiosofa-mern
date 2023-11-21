import type { CollectionConfig } from 'payload/types'

import { admins } from '../../access/admins'
import { anyone } from '../../access/anyone'
import adminsAndUser from '../Users/access/adminsAndUser'
import { checkRole } from '../Users/checkRole'
import { MediaBlock } from '../../blocks/MediaBlock'

export const Djs: CollectionConfig = {
    slug: 'djs',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'residenceName'],
    },
    access: {
        read: adminsAndUser,
        create: anyone,
        update: adminsAndUser,
        delete: admins,
        admin: ({ req: { user } }) => checkRole(['admin'], user),
      },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'residenceName',
            type: 'text',
        },
        {
            name: 'description',
            type: 'richText',
        },
        {
            name: 'picture',
            type: 'blocks',
            blocks: [MediaBlock]
        },
        {
            name: 'socialnetworkUrl',
            type: 'text',
        },
    ],
}