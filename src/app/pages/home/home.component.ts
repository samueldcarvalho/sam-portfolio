import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { TranslateService } from '@ngx-translate/core';
import { lastValueFrom } from 'rxjs';

interface ExperienceBoard {
  experiences: Experience[]
}

interface Experience {
  timing: string;
  title: string;
  description: string;
}

interface Project {
  title: string;
  description: string;
  chips: string[];
  progress: number;
  repoURL: string;
  appURL: string;
  repoEnabled: boolean;
  appEnabled: boolean;
  imagePath: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  public experienceBoards: ExperienceBoard[] = [];
  public projects: Project[] = [];
  public aboutDescription: string = "";
  public selectedLanguage: "ptbr" | "en" = "ptbr";

  private birthDate = new Date(1999, 10, 22);

  constructor(private translate: TranslateService) { }
  
  ngOnInit(): void {
    this.initExperiences();
    this.initProjects();
  }
  
  ngAfterViewInit(): void {
    const swiperEl = document.querySelector('swiper-container') as any;

    Object.assign(swiperEl!, {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      },
    });
    swiperEl!.initialize();
  }

  private async initExperiences() {
    this.aboutDescription = await this.lang("MAIN.CONTENT.ABOUT_SECTION.DESCRIPTION"); 
    this.changeAgeAboutDescription();

    this.experienceBoards = [
      {
        experiences: [
          {
            timing: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.8.TIMING"),
            title: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.8.TITLE"),
            description: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.8.DESCRIPTION")
          },

          {
            timing: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.7.TIMING"),
            title: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.7.TITLE"),
            description: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.7.DESCRIPTION")
          },
          {
            timing: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.6.TIMING"),
            title: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.6.TITLE"),
            description: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.6.DESCRIPTION")
          },
          {
            timing: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.5.TIMING"),
            title: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.5.TITLE"),
            description: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.5.DESCRIPTION")
          },
        ]
      },
      {
        experiences: [
          {
            timing: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.4.TIMING"),
            title: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.4.TITLE"),
            description: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.4.DESCRIPTION")
          },
          {
            timing: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.3.TIMING"),
            title: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.3.TITLE"),
            description: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.3.DESCRIPTION")
          },
          {
            timing: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.2.TIMING"),
            title: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.2.TITLE"),
            description: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.2.DESCRIPTION")
          },
          {
            timing: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.1.TIMING"),
            title: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.1.TITLE"),
            description: await this.lang("MAIN.CONTENT.EXPERIENCE_SECTION.EXPERIENCES.1.DESCRIPTION")
          },
        ]
      }
    ]
  }

  private async initProjects() {
    this.projects = [
      {
        title: await this.lang("MAIN.CONTENT.PROJECTS_SECTION.PROJECTS.1.TITLE"),
        description: await this.lang("MAIN.CONTENT.PROJECTS_SECTION.PROJECTS.1.DESCRIPTION"),
        progress: 100,
        chips: ["React", "Next.JS", "ASP.NET Core", "C#", "TypeScript", "SignalR", "MySQL", "EntityFramework"],
        appURL: "https://pigeon-box.vercel.app/login",
        repoURL: "https://github.com/samueldcarvalho/PigeonBox",
        repoEnabled: true,
        appEnabled: true,
        imagePath: "../../../assets/images/_pigeonBox.png"
      },
      {
        title: await this.lang("MAIN.CONTENT.PROJECTS_SECTION.PROJECTS.2.TITLE"),
        description: await this.lang("MAIN.CONTENT.PROJECTS_SECTION.PROJECTS.2.DESCRIPTION"),
        progress: 28,
        chips: ["Angular", "ASP.NET Core", "TypeScript", "C#", "RabbitMQ", "Docker", "MySQL", "EntityFramework"],
        appURL: "",
        repoURL: "https://github.com/samueldcarvalho/PetSavior",
        repoEnabled: true,
        appEnabled: false,
        imagePath: "../../../assets/images/_petSavior.png"
      },
      {
        title: await this.lang("MAIN.CONTENT.PROJECTS_SECTION.PROJECTS.3.TITLE"),
        description: await this.lang("MAIN.CONTENT.PROJECTS_SECTION.PROJECTS.3.DESCRIPTION"),
        progress: 37,
        chips: ["Angular", "ASP.NET Core", "C#", "TypeScript", "RabbitMQ", "SOA", "Microsservices", "Docker", "MySQL"],
        appURL: "",
        repoURL: "",
        repoEnabled: false,
        appEnabled: false,
        imagePath: "../../../assets/images/_samStore.png"
      },
      {
        title: 'Nossa garagem (LP)',
        description: await this.lang("MAIN.CONTENT.PROJECTS_SECTION.PROJECTS.5.DESCRIPTION"),
        progress: 100,
        chips: ["React", "Next.JS", "Bootstrap", "TypeScript"],
        appURL: "https://nossa-garagem-landing-page.vercel.app/",
        repoURL: "",
        repoEnabled: false,
        appEnabled: true,
        imagePath: "../../../assets/images/_nossaGaragem.png"
      },
      {
        title: await this.lang("MAIN.CONTENT.PROJECTS_SECTION.PROJECTS.4.TITLE"),
        description: await this.lang("MAIN.CONTENT.PROJECTS_SECTION.PROJECTS.4.DESCRIPTION"),
        progress: 100,
        chips: ["Angular", "AngularMaterial", "Bootstrap", "TypeScript"],
        appURL: "https://samueldecavalho.netlify.app/",
        repoURL: "https://github.com/samueldcarvalho/sam-portfolio",
        repoEnabled: true,
        appEnabled: true,
        imagePath: "../../../assets/images/_samPortfolio.png"
      },
    ]
  }

  private async lang(path: string): Promise<string>{
    return await lastValueFrom(this.translate.get(path));
  }

  public async onLanguageChanged(data: MatSelectChange){
    this.selectedLanguage = data.value;
    this.translate.use(data.value);
    await this.initExperiences();
    await this.initProjects();

    this.aboutDescription = await this.lang("MAIN.CONTENT.ABOUT_SECTION.DESCRIPTION"); 
    this.changeAgeAboutDescription();
  }

  private changeAgeAboutDescription(){
    const myAge = this.calculateAge(this.birthDate);

    this.aboutDescription = this.aboutDescription.replace("<{age}>", myAge.toString())
  }


  private calculateAge(birthDate: Date): number{
    const today = new Date();

    const dateParam = (today.getMonth() < birthDate.getMonth() || 
      (today.getMonth() === birthDate.getMonth() 
      && today.getDate() < birthDate.getDate())) ? 1 : 0;

    const age = 
      today.getFullYear() - 
      birthDate.getFullYear() - dateParam;

    return age;
  }
}
