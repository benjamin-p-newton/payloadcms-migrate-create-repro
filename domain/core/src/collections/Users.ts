import type { CollectionConfig } from 'payload'
import { TEST_CONSTANT } from '@common/constants'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: TEST_CONSTANT,
      type: 'text',
    },
  ],
}
