export interface LanguageTemplate {
  MAIN: {
    MENU: {
      TITLE: string;
      HOME: string;
      ABOUT: string;
      EXPERIENCE: string;
      PROJECTS: string;
      CONTACT: string;
      COPYRIGHT: string;
    };
    CONTENT: {
      HOME_SECTION: {
        TITLE: string;
        SUBTITLES: {
          1: string;
          2: string;
          3: string;
          4: string;
        },
      },
      ABOUT_SECTION: {
        TITLE: string,
        DESCRIPTION: string;
        CV_BUTTON: string;
      },
      EXPERIENCE_SECTION: {
        TITLE: string,
        EXPERIENCES: {
          1: {
            TIMING: string,
            TITLE: string,
            DESCRIPTION: string
          },
          2: {
            TIMING: string,
            TITLE: string,
            DESCRIPTION: string
          },
          3: {
            TIMING: string,
            TITLE: string,
            DESCRIPTION: string
          },
          4: {
            TIMING: string,
            TITLE: string,
            DESCRIPTION: string
          },
          5: {
            TIMING: string,
            TITLE: string,
            DESCRIPTION: string
          },
          6: {
            TIMING: string,
            TITLE: string,
            DESCRIPTION: string
          },
          7: {
            TIMING: string,
            TITLE: string,
            DESCRIPTION: string
          },
          8: {
            TIMING: string,
            TITLE: string,
            DESCRIPTION: string
          },
        }
      },
      PROJECTS_SECTION: {
        TITLE: string;
        PROJECTS: {
          1: {
            TITLE: string;
            DESCRIPTION: string;
          },
          2: {
            TITLE: string;
            DESCRIPTION: string;
          },
          3: {
            TITLE: string;
            DESCRIPTION: string;
          },
          4: {
            TITLE: string;
            DESCRIPTION: string;
          },
        }
        PROGRESS: string;
        OPEN_REPO: string;
        PRIVATE_REPO: string;
        VIEW_APP: string;
      },
      CONTACT_SECTION: {
        DESCRIPTION: string;
      }
    }
  }
}
