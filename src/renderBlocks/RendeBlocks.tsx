import React from 'react'
import CourseSection from '@/app/components/CourseSection/CourseSection'
import { CourseBlock } from '@/payload-types'
import style from "./RendeBlocks.module.css"

type CustomBlock = CourseBlock
type RenderBlocksProps ={
    blocks: CustomBlock[] | null |undefined
}

export default function RenderBlocks({blocks}:RenderBlocksProps){
    if(!blocks || !Array.isArray(blocks)){
        return null
    }
    return(
        <section className={style.section}>
 {blocks.map((block) => {
        const courseImage =
          typeof block.CourseImage === 'object'
            ? {
                id: block.CourseImage.id,
                url: block.CourseImage.url || '',
                alt: block.CourseImage.alt,
                width: block.CourseImage.width || 0,
                height: block.CourseImage.height || 0,
              }
            : null
             return (
          <CourseSection
            key={block.id}
            data={[
              {
                slug: block.slug,
                CourseImage: courseImage,
                CoursePrice: block.CoursePrice,
                CourseName: block.CourseName,
                AmoutOfPeople: block.AmoutOfPeople,
                Description: block.Description,
                Button: block.Button,
              },
            ]}
          />
        )
      })}
        </section>
    )
}