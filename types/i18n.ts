import { ReactNode } from 'react';

export interface Dictionary {
  nav: {
    home: string;
    tradition: string;
    program: string;
    contacts: string;
    flyer: string;
  };
  footer: {
    cta: {
      title: string;
      days: string;
      hours: string;
      min: string;
      sec: string;
      button: string;
    };
    sponsors: string;
    follow: string;
    legal: {
      privacy: string;
      terms: string;
      rights: string;
    };
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
      button1: string;
      button2: string;
      scroll: string;
    };
    tradition: {
      pretitle: string;
      title: string;
      description: string;
      titlepic1: string;
      descriptionpic1: string;
      titlepic2: string;
      descriptionpic2: string;
      cta: string;
    };
    program: {
      pretitle: string;
      title: string;
      description: string;
      titlepic1: string;
      descriptionpic1: string;
      titlepic2: string;
      descriptionpic2: string;
      cta: string;
    };
    parallax: {
      title: string;
      subtitle: string;
    };
    reviews: {
      title: string;
      subtitle: string;
      disclaimer: string;
      scroll: string;
    };
  };
  tradition: {
    title: string;
    description1: string;
    description2: string;
    cta: string;
    page: {
      title: string;
      subtitle: string;
      origins: ContentSection;
      legend: ContentSection;
      procession: ContentSection;
      today: ContentSection;
      community: ContentSection;
    };
  };
  program: {
    title: string;
    subtitle: string;
    day1: ProgramDayProps;
    day2: ProgramDayProps;
    day3: ProgramDayProps;
    cta: string;
    info: {
      title: string;
      where: InfoItem;
      entrance: InfoItem;
      parking: InfoItem;
    };
  };
  contacts: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      send: string;
      sending: string;
      success: string;
      error: string;
    };
    info: {
      title: string;
      address: InfoItem;
      email: InfoItem;
      phone: InfoItem;
      social: {
        title: string;
      };
    };
    map: {
      title: string;
    };
  };
  privacy: LegalPage;
  terms: LegalPage;
  disclaimer: LegalPage;
}

export interface LegalPage {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: {
    [key: string]: ContentSection;
  };
}

export interface ProgramDayProps {
  date: string;
  events: Event[];
  index: number;
}

interface Event {
  time: string;
  title: string;
  description: string;
}

export interface InfoItem {
  value: ReactNode;
  title: string;
  description: string;
}

export interface ContentSection {
  title: string;
  content: string;
}
