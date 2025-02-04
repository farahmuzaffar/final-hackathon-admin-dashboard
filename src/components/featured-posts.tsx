// src\components\featured-posts.tsx

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Calendar, MessageSquare } from 'lucide-react'
import Image from "next/image"

interface BlogPost {
  image: string
  tags: string[]
  title: string
  description: string
  date: string
  comments: number
  isNew?: boolean
}

const posts: BlogPost[] = [
  {
    image: "/featured1.png",
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
    isNew: true
  },
  {
    image: "/featured2.png",
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
    isNew: true
  },
  {
    image: "/featured3.png",
    tags: ["Google", "Trending", "New"],
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
    isNew: true
  }
]

export default function FeaturedPosts() {
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-blue-500 font-medium mb-2">Practice Advice</h3>
          <h2 className="text-4xl font-bold mb-4">Featured Posts</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={500}
                  className="w-full h-[300px] object-cover"
                />
                {post.isNew && (
                  <Badge className="absolute top-4 left-4 bg-red-500 text-white">
                    NEW
                  </Badge>
                )}
              </div>
              <CardHeader>
                <div className="flex gap-2 mb-2">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`text-sm ${
                        tag === "Google"
                          ? "text-blue-500"
                          : tag === "Trending"
                          ? "text-gray-600"
                          : "text-gray-400"
                      }`}
                    >
                      {tag}
                      {tagIndex < post.tags.length - 1 && (
                        <span className="mx-2 text-gray-300">•</span>
                      )}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold">{post.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">{post.description}</p>
              </CardContent>
              <CardFooter className="flex items-center justify-between border-t pt-4">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.date}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  {post.comments} comments
                </div>
              </CardFooter>
              <CardFooter className="pt-0">
                <Button variant="link" className="p-0 h-auto text-blue-500">
                  Learn More →
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}