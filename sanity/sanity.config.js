import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'sanity-stellarSat',

  projectId: 'uismb98i',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],
  basePath: '/admin',

  schema: {
    types: schemaTypes,
  },
})
