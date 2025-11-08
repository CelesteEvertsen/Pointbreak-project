import { Block } from 'payload'
import {lexicalEditor} from "@payloadcms/richtext-lexical"

export const CourseBlock: Block = {
  slug: 'CourseBlock',
  interfaceName: 'CourseBlock',
  labels: {
    singular: 'Course',
    plural: 'Corses',
  },
  fields: [
  {
      name: "slug",
      label: "Side-URL",
      type: "text",
      required: false,
      unique: true,
      admin: {
        description: "Hvilken side-URL skal siden vises på? PS: må være unik."
      }
    },
    {
      name:"content",
      label: "Kursinnhold",
      type:"richText",
      required:true,
      editor: lexicalEditor(),
      admin:{
        description:"Detaljer for kurset",
      }
/*https://payloadcms.com/docs/rich-text/converters#example-retrieving-the-editor-config-from-an-existing-field */
    },
    {
      name: 'CourseImage',
      type: 'upload',
      required: true,
      relationTo: 'media',
      admin: {
        description: 'Bilde til kurs kort',
      },
    },
    {
         name:"CoursePrice",
        type: "text",
        required: true,
        admin:{
            description: "Overskrift for pris"
        }
    },
    {
         name:"CourseName",
        type: "text",
        required: true,
        admin:{
            description: "Overskrift med kurs"
        }
    },
    {
         name:"AmoutOfPeople",
        type: "number",
        required: true,
        admin:{
            description: "Hvor mange deltakerer"
        }
    },

    {
        name:"Description",
        type:"textarea",
        maxLength:120,
        required:true,
         admin:{
            description: "Beskrivelse"
        }
    },
    {
        name:"Button",
        type:"text",
        required:true,
         admin:{
            description: "Knapper"
        }
    }
  ]
}
