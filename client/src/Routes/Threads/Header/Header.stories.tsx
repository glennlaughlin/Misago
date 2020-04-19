import React from "react"
import { RootContainer, categories } from "../../../UI/Storybook"
import HeaderAllThreads from "./HeaderAllThreads"
import HeaderCategory from "./HeaderCategory"

export default {
  title: "Route/Threads/Header",
}

const forumStats = { threads: 142567, posts: 1089524, users: 25663 }

export const Category = () => (
  <RootContainer padding>
    <HeaderCategory category={categories[0]} />
  </RootContainer>
)

export const ForumIndex = () => (
  <RootContainer padding>
    <HeaderAllThreads
      settings={{
        forumIndexThreads: true,
        forumIndexHeader: "Welcome to Misago official forums!",
        forumName: "Misago",
      }}
      stats={forumStats}
    />
  </RootContainer>
)

export const AllThreads = () => (
  <RootContainer padding>
    <HeaderAllThreads
      settings={{
        forumIndexThreads: false,
        forumIndexHeader: "",
        forumName: "Misago",
      }}
      stats={forumStats}
    />
  </RootContainer>
)
