export interface Dictionary {
  // ======= Nav =======
  nav: {
    home: string;
    tradition: string;
    program: string;
    contacts: string;
    flyer: string;
  };
  // ======= Footer =======
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
  // ======= Home =======
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
    subtitle: string;
    section1: SectionItem;
    section2: SectionItem;
    section3: SectionItem;
    section4: SectionItem;
    section5: SectionItem;
    timeline: {
      title: string;
      subtitle: string;
      footer: string;
      items: Array<{
        year: string;
        title: string;
        description: string;
      }>;
    };
  };
  program: {
    title: string;
    subtitle: string;
    day1: ProgramDayProps;
    day2: ProgramDayProps;
    day3: ProgramDayProps;
    opening: {
      pretitle: string;
      title: string;
      description: string;
    };
    restaurant: {
      title: string;
      subtitle: string;
      specialties: string;
      advice: string;
      restaurants: Array<{
        id: number;
        name: string;
        cuisine: string;
        description: string;
        address: string;
        phone: string;
        website: string;
        rating: number;
        priceLevel: string;
        image: string;
        specialties: string[];
      }>;
    };
    accommodation: {
      title: string;
      subtitle: string;
      accomodations: Array<{
        id: number;
        name: string;
        type: string;
        description: string;
        address: string;
        phone: string;
        website: string;
        rating: number;
        priceRange: string;
        image: string;
        amenities: string[];
        distanceFromCenter: string;
      }>;
    };
  };
  // ======= Contacts =======
  contacts: {
    title: string;
    subtitle: string;
    form: {
      title: string;
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
      port: string;
    };
  };
  privacy: LegalPage;
  terms: LegalPage;
  disclaimer: {
    banner: {
      title: string;
      message: string;
      link: string;
      close: string;
    };
    title: string;
    subtitle: string;
    lastUpdated: string;
    sections: {
      [key: string]: ContentSection;
    };
  };
}

interface SectionItem {
  title: string;
  subtitle: string;
  description: string;
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
  index: number;
  date: string;
  events: Event[];
}

interface Event {
  time: string;
  title: string;
  description: string;
}

export interface InfoItem {
  title: string;
  description: string;
}

export interface ContentSection {
  title: string;
  content: string;
}
