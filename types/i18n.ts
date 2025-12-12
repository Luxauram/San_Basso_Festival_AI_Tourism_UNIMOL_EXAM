import { ReactNode } from 'react';

export interface Dictionary {
  nav: {
    home: string;
    tradition: string;
    program: string;
    contacts: string;
  };
  hero: {
    title: string;
    subtitle: string;
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
  footer: {
    cta: {
      title: string;
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
