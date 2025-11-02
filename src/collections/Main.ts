import { CollectionConfig } from 'payload'

export const Main: CollectionConfig = {
  slug: 'main',
  access: {
    read: () => true,
  },
  labels: {
    singular: 'Hovedside Innhold',
    plural: 'Hovedside Innhold',
  },
  fields: [
    {
      name: 'headerImage',
      type: 'upload',
      required: true,
      relationTo: 'media',
      admin: {
        description: 'Forside bilde',
      },
    },
    {
      name: 'headline',
      type: 'text',
      required: true,
      admin: {
        description: 'Hovedoverskrift på forside bilde',
      },
    },
     {
      name: 'underOverskrift',
      type: 'text',
      required: false,
      admin: {
        description: 'Valgfri underoverskrift',
      },
    },
    {
      name: 'overlayTekstPosisjon',
      type: 'select',
      options: [
        { label: 'Senter', value: 'center' },
        { label: 'Øvre venstre', value: 'top-left' },
        { label: 'Øvre høyre', value: 'top-right' },
        { label: 'Nedre venstre', value: 'bottom-left' },
        { label: 'Nedre høyre', value: 'bottom-right' },
      ],
      defaultValue: 'center',
      admin: {
        description: 'Plassring av tekst overbilde',
      },
    },
    {
      name: 'overlayTekstFarge',
      type: 'text',
      defaultValue: '#FFFFFF',
      admin: {
        description: 'Font farge',
      },
    },
  
  ],
}
