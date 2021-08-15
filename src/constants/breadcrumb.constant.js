export const APP_TREE = [
  {
    name: "Home",
    link: "/",
    children: [
      {
        name: "Collections",
        link: "/collections",
        children: [
          {
            name: "Notebook",
            link: "/notebook/:notebookId",
            children: [
              {
                name: "Note",
                link: "/notebook/:notebookId/note/:noteId"
              },
            ]
          }
        ]
      },
      {
        name: "Flashcard",
        link: "/flashcard"
      },
      {
        name: "Settings",
        link: "/settings",
        children: [
          {
            name: "Profile",
            link: "/settings/profile"
          }
        ]
      },
    ]
  },
  {
    name: "Log in",
    link: "/login",
    children: [
      {
        name: "Forgot Password",
        link: "/forgot-password"
      }
    ]
  },
  {
    name: "Sign up",
    link: "/signup"
  }
]

export const appTreeDirectory = {
  HOME: [0],
  COLLECTIONS: [0, 0],
  NOTEBOOK: [0, 0, 0],
  NOTE: [0, 0, 0, 0],
  FLASHCARD: [0, 1],
  SETTINGS: [0, 2],
  PROFILE: [0, 1, 0],
  LOGIN: [1],
  FORGOT_PASSWORD: [1, 0],
  SIGNUP: [2],
}