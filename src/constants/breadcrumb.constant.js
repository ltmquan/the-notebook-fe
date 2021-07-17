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
            link: "/collections/notebookId",
            children: [
              {
                name: "Note",
                link: "/note/noteId"
              },
              {
                name: "New Note",
                link: "/note/add-note"
              }
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
  ADD_NOTE: [0, 0, 0, 1],
  FLASHCARD: [0, 1],
  SETTINGS: [0, 2],
  PROFILE: [0, 1, 0],
  LOG_IN: [1],
  FORGOT_PASSWORD: [1, 0],
  SIGN_UP: [2],
}