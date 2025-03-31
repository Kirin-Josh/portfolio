import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

function Grid() {
  return (
    <section id='about'>
      <BentoGrid>
        {/* we can just destructure the properties */}
        {gridItems.map(({id, title, description, className, img, imgClassName, spareImg, titleClassName}) => (
          <BentoGridItem 
            id={id}
            key={id}
            title={title}
            description={description}
            className={className}
            img={img}
            titleClassName={titleClassName}
            spareImg={spareImg}
            imgClassName={imgClassName}
          />
        ))}
      </BentoGrid>
    </section>
  )
}

export default Grid