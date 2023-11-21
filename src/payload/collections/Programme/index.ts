import type { CollectionConfig } from 'payload/types'

import { checkRole } from '../Users/checkRole'
import { MediaBlock } from '../../blocks/MediaBlock'

const Programme: CollectionConfig = {
  slug: 'programme',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['dj', 'title', 'startDate'],
  },
  access: {
    read: ({ req: { user } }) => checkRole(['admin'], user),
    create: ({ req: { user } }) => checkRole(['admin'], user),
    update: ({ req: { user } }) => checkRole(['admin'], user),
    delete: ({ req: { user } }) => checkRole(['admin'], user),
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'dj',
      type: 'relationship',
      relationTo: 'djs',
      hasMany: false,
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      label: { fr: 'Titre du mix', en: 'Title of the mix' }
    },
    {
      name: 'startDate',
      label: {fr: 'Date et heure du début de diffusion'},
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        }
      }
    },
    {
      name: 'endDate',
      label: {fr: 'Date et heure de la fin de la diffusion'},
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime'
        }
      }
    },
    {
      name: 'displayEndDate',
      type: 'checkbox',
    },
    {
      name: 'type',
      type: 'select',
      options: [
        {
          label: 'Mix',
          value: 'mix',
        },
        {
          label: 'Event',
          value: 'event',
        },
      ],
    },
    {
        name: 'picture',
        type: 'blocks',
        blocks: [MediaBlock]
    },
    {
      name: 'mixUrl',
      label: 'Soundcloud emmbedded code',
      admin: {placeholder: '203120932'},
      type: 'text',      
    }
  ],
}

export default Programme
