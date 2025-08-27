import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Button } from '@heroui/react'
import Image from 'next/image'

type ProjectCardProps = {
  title: string
  description?: string
  imageUrl: string
  tags?: string[]
  link?: string
}

export default function ProjectCard({
  title, imageUrl, tags, link
}: ProjectCardProps) {
  return (
    <Card className="max-w-sm shadow-lg rounded-xl overflow-hidden w-[350px]">
      <CardHeader className="p-0">
        <Image src={imageUrl} alt={title} width={500} height={500} className="w-full h-48 object-cover" />
      </CardHeader>
      <CardBody>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        {/* <p className="text-gray-600 mb-4">{description}</p> */}
        <div className="flex flex-wrap gap-2 mb-2">
          {tags?.map(tag => (
            <small key={tag}>{tag}</small>
          ))}
        </div>
      </CardBody>
      <CardFooter>
        <Button as="a" href={link} target="_blank" color="primary" variant="bordered" fullWidth>
          View Project
        </Button>
      </CardFooter>
    </Card>
  )
}