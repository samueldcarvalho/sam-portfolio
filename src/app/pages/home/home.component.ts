import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface ExperienceBoard {
  experiences: Experience[]
}

interface Experience {
  timing: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public experienceBoards: ExperienceBoard[] = [];

  constructor(private translate: TranslateService) {
    this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.1.TIMING")
  }

  ngOnInit(): void {
    this.initExperiences();
  }

  private async lang(path: string): Promise<string>{
    return await this.translate.get(path).toPromise();
  }

  private async initExperiences() {
    this.experienceBoards = [
      {
        experiences: [
          {
            timing: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.1.TIMING"),
            title: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.1.TITLE"),
            description: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.1.DESCRIPTION")
          },
          {
            timing: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.2.TIMING"),
            title: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.2.TITLE"),
            description: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.2.DESCRIPTION")
          },
          {
            timing: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.3.TIMING"),
            title: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.3.TITLE"),
            description: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.3.DESCRIPTION")
          },
          {
            timing: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.4.TIMING"),
            title: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.4.TITLE"),
            description: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.4.DESCRIPTION")
          },
        ]
      },
      {
        experiences: [
          {
            timing: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.5.TIMING"),
            title: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.5.TITLE"),
            description: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.5.DESCRIPTION")
          },
          {
            timing: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.6.TIMING"),
            title: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.6.TITLE"),
            description: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.6.DESCRIPTION")
          },
          {
            timing: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.7.TIMING"),
            title: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.7.TITLE"),
            description: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.7.DESCRIPTION")
          },
          {
            timing: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.8.TIMING"),
            title: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.8.TITLE"),
            description: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.8.DESCRIPTION")
          },
        ]
      }
    ]
  }
}
